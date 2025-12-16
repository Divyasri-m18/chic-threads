await axios.post(
  "http://localhost:5000/api/orders/place",
  {
    items: cartItems,
    totalAmount: total,
    shippingAddress: formData,
    paymentMethod: "COD",
  }
);

alert("Order placed successfully 🎉");
