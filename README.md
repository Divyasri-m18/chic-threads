🛍️ Chic Threads – Women’s Fashion E-Commerce Website

Chic Threads is a full-stack women-only fashion e-commerce application built with modern web technologies.
It provides a smooth shopping experience with secure authentication, cart management, order placement, and backend integration.

This project is designed to demonstrate real-world full-stack development, deployment, and cloud integration skills.

🌐 Live Demo

Frontend (Vercel):
👉 https://chic-threads-seven.vercel.app

Backend (Render):
👉 https://chic-threads-backend.onrender.com

✨ Features
🧑‍💻 Frontend

Modern and responsive UI (women-only fashion store)

Product listing & category browsing

Cart management (add/remove/update items)

Checkout page with order summary

Order success confirmation page

Smooth navigation using React Router

🔐 Authentication

User Registration

User Login

JWT-based authentication

Protected routes

🛒 Orders

Place orders with shipping details

Payment method selection (Cash on Delivery)

Orders stored securely in database

Unique Order ID generation

🧱 Tech Stack
Frontend

React.js

React Router

Context API

CSS (modern UI styling)

Deployed on Vercel

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JWT Authentication

Nodemailer (Email notifications)

Deployed on Render

🗄️ Database

MongoDB Atlas

Stores:

Users

Orders

Cart items

Shipping details

📧 Email Notifications (Important Note)

This project includes email notification functionality using Nodemailer (Gmail SMTP).

✔️ Local Development

Email notifications work correctly when running the backend locally in VS Code.

⚠️ Production Deployment (Render – Free Tier)

On Render free tier, outbound SMTP connections (Gmail) are restricted.

As a result:

✅ Order is placed successfully

✅ Order is saved in MongoDB

❌ Email delivery may timeout or fail

This is a known limitation of free cloud hosting and not an issue with the project code.

The email logic is fully implemented and production-ready.
For live production systems, third-party email services such as Resend, SendGrid, or Mailgun are recommended.

🧪 Order Flow

User adds products to cart

Proceeds to checkout

Enters shipping details

Places order

Order is:

Saved in MongoDB

Confirmed on UI

Email triggered (local / supported environments)

📂 Project Structure
chic-threads/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md

🚀 Deployment
Frontend

Deployed using Vercel

Automatically redeploys on GitHub push

Backend

Deployed using Render

Connected to MongoDB Atlas

Environment variables managed securely

🧠 Learning Outcomes

Full-stack application architecture

REST API design

Authentication with JWT

Database schema design

Cloud deployment (Vercel & Render)

Handling real-world deployment limitations

Secure environment variable management

📌 Conclusion

Chic Threads is a complete full-stack e-commerce project that demonstrates both frontend and backend expertise.
It closely simulates a real production workflow, including deployment, database integration, and service limitations.
