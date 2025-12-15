require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

// 🔗 MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  });

// 🛍️ PRODUCTS DATA
const products = [
  // ================= KURTI (10) =================
  {
    name: "Floral Embroidered Kurti",
    category: "Kurti",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "/images/women/kurti/kurti1.jpg",
    description: "Beautiful floral embroidered cotton kurti",
  },
  {
    name: "Printed Anarkali Kurti",
    category: "Kurti",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    image: "/images/women/kurti/kurti2.jpg",
    description: "Elegant printed Anarkali kurti",
  },
  {
    name: "Cotton A-Line Kurti",
    category: "Kurti",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "/images/women/kurti/kurti3.jpg",
    description: "Comfortable cotton A-line kurti",
  },
  {
    name: "Straight Fit Kurti",
    category: "Kurti",
    price: 1099,
    originalPrice: 1699,
    discount: 35,
    image: "/images/women/kurti/kurti4.jpg",
    description: "Simple straight fit daily wear kurti",
  },
  {
    name: "Rayon Designer Kurti",
    category: "Kurti",
    price: 1399,
    originalPrice: 1999,
    discount: 30,
    image: "/images/women/kurti/kurti5.jpg",
    description: "Soft rayon designer kurti",
  },

  // ================= TOPS (10) =================
  {
    name: "Casual Striped Top",
    category: "Tops",
    price: 799,
    originalPrice: 1199,
    discount: 33,
    image: "/images/women/tops/top1.jpg",
    description: "Comfortable striped casual top",
  },
  {
    name: "Ruffled Blouse Top",
    category: "Tops",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: "/images/women/tops/top2.jpg",
    description: "Trendy ruffled blouse top",
  },
  {
    name: "Off-Shoulder Crop Top",
    category: "Tops",
    price: 699,
    originalPrice: 999,
    discount: 30,
    image: "/images/women/tops/top3.jpg",
    description: "Stylish off-shoulder crop top",
  },
  {
    name: "Sleeveless Summer Top",
    category: "Tops",
    price: 599,
    originalPrice: 899,
    discount: 33,
    image: "/images/women/tops/top4.jpg",
    description: "Lightweight sleeveless summer top",
  },
  {
    name: "Formal Office Top",
    category: "Tops",
    price: 1099,
    originalPrice: 1599,
    discount: 31,
    image: "/images/women/tops/top5.jpg",
    description: "Elegant formal office wear top",
  },

  // ================= SAREES (10) =================
  {
    name: "Designer Silk Saree",
    category: "Sarees",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    image: "/images/women/sarees/saree1.jpg",
    description: "Elegant silk saree with golden border",
  },
  {
    name: "Banarasi Silk Saree",
    category: "Sarees",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image: "/images/women/sarees/saree2.jpg",
    description: "Traditional Banarasi silk saree",
  },
  {
    name: "Chiffon Party Saree",
    category: "Sarees",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    image: "/images/women/sarees/saree3.jpg",
    description: "Gorgeous chiffon party wear saree",
  },
  {
    name: "Cotton Daily Wear Saree",
    category: "Sarees",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    image: "/images/women/sarees/saree4.jpg",
    description: "Comfortable cotton daily wear saree",
  },
  {
    name: "Georgette Printed Saree",
    category: "Sarees",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    image: "/images/women/sarees/saree5.jpg",
    description: "Printed georgette saree",
  },

  // ================= WESTERN (10) =================
  {
    name: "Western Maxi Dress",
    category: "Western",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    image: "/images/women/western/western1.jpg",
    description: "Stylish western maxi dress",
  },
  {
    name: "Denim Jumpsuit",
    category: "Western",
    price: 2999,
    originalPrice: 4299,
    discount: 30,
    image: "/images/women/western/western2.jpg",
    description: "Trendy denim jumpsuit",
  },
  {
    name: "Floral Midi Dress",
    category: "Western",
    price: 1899,
    originalPrice: 2699,
    discount: 30,
    image: "/images/women/western/western3.jpg",
    description: "Beautiful floral midi dress",
  },
  {
    name: "Party Wear Gown",
    category: "Western",
    price: 4599,
    originalPrice: 6599,
    discount: 30,
    image: "/images/women/western/western4.jpg",
    description: "Elegant party wear gown",
  },
  {
    name: "Casual Shirt Dress",
    category: "Western",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    image: "/images/women/western/western5.jpg",
    description: "Comfortable casual shirt dress",
  },
];

// 🌱 SEED FUNCTION
const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("🌱 Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding products", error);
    process.exit(1);
  }
};

seedProducts();
