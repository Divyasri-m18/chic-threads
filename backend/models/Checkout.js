await fetch("http://localhost:5000/api/orders/place", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  body: JSON.stringify({
    orderId,
    userEmail: formData.email,
    items: cartItems,
    totalAmount: total,
    paymentMethod: formData.paymentMethod,
    shippingAddress: formData
  })
});
