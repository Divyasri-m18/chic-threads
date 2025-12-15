const products = [
  // ================= KURTI (10) =================
  {
    id: 1,
    name: "Floral Embroidered Kurti",
    category: "Kurti",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "/images/kurti/kurti1.jpg",
    description: "Beautiful floral embroidered cotton kurti"
  },
  {
    id: 2,
    name: "Printed Straight Kurti",
    category: "Kurti",
    price: 1099,
    originalPrice: 1699,
    discount: 35,
    image: "/images/kurti/kurti2.jpg",
    description: "Printed straight cut kurti"
  },
  {
    id: 3,
    name: "Rayon Anarkali Kurti",
    category: "Kurti",
    price: 1399,
    originalPrice: 2099,
    discount: 33,
    image: "/images/kurti/kurti3.jpg",
    description: "Elegant rayon Anarkali kurti"
  },
  {
    id: 4,
    name: "Cotton Daily Wear Kurti",
    category: "Kurti",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "/images/kurti/kurti4.jpg",
    description: "Comfortable cotton daily wear kurti"
  },
  {
    id: 5,
    name: "Designer Party Kurti",
    category: "Kurti",
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    image: "/images/kurti/kurti5.jpg",
    description: "Designer kurti for festive occasions"
  },
  {
    id: 6,
    name: "A-Line Printed Kurti",
    category: "Kurti",
    price: 1199,
    originalPrice: 1799,
    discount: 33,
    image: "/images/kurti/kurti6.jpg",
    description: "Printed A-line style kurti"
  },
  {
    id: 7,
    name: "Office Wear Kurti",
    category: "Kurti",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: "/images/kurti/kurti7.jpg",
    description: "Simple and elegant office wear kurti"
  },
  {
    id: 8,
    name: "Ethnic Long Kurti",
    category: "Kurti",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    image: "/images/kurti/kurti8.jpg",
    description: "Traditional ethnic long kurti"
  },
  {
    id: 9,
    name: "Flared Kurti Set",
    category: "Kurti",
    price: 1999,
    originalPrice: 2899,
    discount: 31,
    image: "/images/kurti/kurti9.jpg",
    description: "Stylish flared kurti set"
  },
  {
    id: 10,
    name: "Premium Silk Kurti",
    category: "Kurti",
    price: 2299,
    originalPrice: 3299,
    discount: 30,
    image: "/images/kurti/kurti10.jpg",
    description: "Premium silk festive kurti"
  },

  // ================= TOPS (10) =================
  {
    id: 11,
    name: "Casual Striped Top",
    category: "Tops",
    price: 799,
    originalPrice: 1199,
    discount: 33,
    image: "/images/tops/top1.jpg",
    description: "Comfortable casual striped top"
  },
  {
    id: 12,
    name: "Ruffled Blouse Top",
    category: "Tops",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: "/images/tops/top2.jpg",
    description: "Trendy ruffled blouse top"
  },
  {
    id: 13,
    name: "Off-Shoulder Crop Top",
    category: "Tops",
    price: 699,
    originalPrice: 999,
    discount: 30,
    image: "/images/tops/top3.jpg",
    description: "Stylish off-shoulder crop top"
  },
  {
    id: 14,
    name: "Formal Office Top",
    category: "Tops",
    price: 1199,
    originalPrice: 1699,
    discount: 29,
    image: "/images/tops/top4.jpg",
    description: "Elegant formal office wear top"
  },
  {
    id: 15,
    name: "Floral Print Top",
    category: "Tops",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "/images/tops/top5.jpg",
    description: "Beautiful floral print top"
  },
  {
    id: 16,
    name: "Sleeveless Summer Top",
    category: "Tops",
    price: 649,
    originalPrice: 999,
    discount: 35,
    image: "/images/tops/top6.jpg",
    description: "Lightweight sleeveless summer top"
  },
  {
    id: 17,
    name: "Peplum Style Top",
    category: "Tops",
    price: 1099,
    originalPrice: 1599,
    discount: 31,
    image: "/images/tops/top7.jpg",
    description: "Stylish peplum design top"
  },
  {
    id: 18,
    name: "Denim Shirt Top",
    category: "Tops",
    price: 1399,
    originalPrice: 1999,
    discount: 30,
    image: "/images/tops/top8.jpg",
    description: "Trendy denim shirt style top"
  },
  {
    id: 19,
    name: "Printed Tunic Top",
    category: "Tops",
    price: 949,
    originalPrice: 1399,
    discount: 32,
    image: "/images/tops/top9.jpg",
    description: "Printed tunic length top"
  },
  {
    id: 20,
    name: "Party Wear Top",
    category: "Tops",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    image: "/images/tops/top10.jpg",
    description: "Stylish party wear top"
  },

  // ================= SAREES (10) =================
  {
    id: 21,
    name: "Designer Silk Saree",
    category: "Sarees",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    image: "/images/sarees/saree1.jpg",
    description: "Elegant silk saree with golden border"
  },
  {
    id: 22,
    name: "Banarasi Silk Saree",
    category: "Sarees",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image: "/images/sarees/saree2.jpg",
    description: "Traditional Banarasi silk saree"
  },
  {
    id: 23,
    name: "Chiffon Party Saree",
    category: "Sarees",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    image: "/images/sarees/saree3.jpg",
    description: "Gorgeous chiffon party wear saree"
  },
  {
    id: 24,
    name: "Georgette Printed Saree",
    category: "Sarees",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    image: "/images/sarees/saree4.jpg",
    description: "Lightweight georgette printed saree"
  },
  {
    id: 25,
    name: "Cotton Daily Wear Saree",
    category: "Sarees",
    price: 1899,
    originalPrice: 2699,
    discount: 30,
    image: "/images/sarees/saree5.jpg",
    description: "Comfortable cotton daily wear saree"
  },
  {
    id: 26,
    name: "Organza Designer Saree",
    category: "Sarees",
    price: 5599,
    originalPrice: 7999,
    discount: 30,
    image: "/images/sarees/saree6.jpg",
    description: "Premium organza designer saree"
  },
  {
    id: 27,
    name: "Kanchipuram Silk Saree",
    category: "Sarees",
    price: 9999,
    originalPrice: 14999,
    discount: 33,
    image: "/images/sarees/saree7.jpg",
    description: "Traditional Kanchipuram silk saree"
  },
  {
    id: 28,
    name: "Net Embroidered Saree",
    category: "Sarees",
    price: 4299,
    originalPrice: 6299,
    discount: 32,
    image: "/images/sarees/saree8.jpg",
    description: "Embroidered net party saree"
  },
  {
    id: 29,
    name: "Linen Saree",
    category: "Sarees",
    price: 2399,
    originalPrice: 3499,
    discount: 31,
    image: "/images/sarees/saree9.jpg",
    description: "Soft linen saree for summer wear"
  },
  {
    id: 30,
    name: "Floral Printed Saree",
    category: "Sarees",
    price: 2899,
    originalPrice: 4199,
    discount: 31,
    image: "/images/sarees/saree10.jpg",
    description: "Floral printed casual saree"
  },

  // ================= WESTERN (10) =================
  {
    id: 31,
    name: "Western Maxi Dress",
    category: "Western",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    image: "/images/western/western1.jpg",
    description: "Stylish western maxi dress"
  },
  {
    id: 32,
    name: "Denim Jumpsuit",
    category: "Western",
    price: 2999,
    originalPrice: 4299,
    discount: 30,
    image: "/images/western/western2.jpg",
    description: "Trendy denim jumpsuit"
  },
  {
    id: 33,
    name: "Floral Midi Skirt Set",
    category: "Western",
    price: 1899,
    originalPrice: 2699,
    discount: 30,
    image: "/images/western/western3.jpg",
    description: "Beautiful floral midi skirt set"
  },
  {
    id: 34,
    name: "Bodycon Party Dress",
    category: "Western",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    image: "/images/western/western4.jpg",
    description: "Stylish bodycon party dress"
  },
  {
    id: 35,
    name: "Casual Shirt Dress",
    category: "Western",
    price: 1699,
    originalPrice: 2499,
    discount: 32,
    image: "/images/western/western5.jpg",
    description: "Comfortable casual shirt dress"
  },
  {
    id: 36,
    name: "Wrap Style Dress",
    category: "Western",
    price: 2199,
    originalPrice: 3199,
    discount: 31,
    image: "/images/western/western6.jpg",
    description: "Elegant wrap style western dress"
  },
  {
    id: 37,
    name: "Pleated Maxi Dress",
    category: "Western",
    price: 2599,
    originalPrice: 3799,
    discount: 32,
    image: "/images/western/western7.jpg",
    description: "Flowy pleated maxi dress"
  },
  {
    id: 38,
    name: "Off-Shoulder Party Dress",
    category: "Western",
    price: 2899,
    originalPrice: 4199,
    discount: 31,
    image: "/images/western/western8.jpg",
    description: "Off-shoulder western party dress"
  },
  {
    id: 39,
    name: "A-Line Short Dress",
    category: "Western",
    price: 1999,
    originalPrice: 2899,
    discount: 31,
    image: "/images/western/western9.jpg",
    description: "Stylish A-line short dress"
  },
  {
    id: 40,
    name: "Premium Evening Gown",
    category: "Western",
    price: 5999,
    originalPrice: 8499,
    discount: 29,
    image: "/images/western/western10.jpg",
    description: "Luxury evening gown for special occasions"
  }
];

export default products;
