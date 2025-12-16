import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { API_BASE } from "../config";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ PLACE ORDER – DEPLOY SAFE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/api/orders/place`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          totalAmount: total,
          paymentMethod: formData.paymentMethod,
          shippingAddress: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Order failed");
        return;
      }

      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error(error);
      alert("Order failed. Please try again.");
    }
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div>
      <h1 className="page-title">Checkout</h1>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          {/* UI SAME – NO CHANGES */}
          <button type="submit" className="place-order-btn">
            Place Order – ₹{total.toLocaleString()}
          </button>
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              {item.name} × {item.quantity} — ₹
              {item.price * item.quantity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
