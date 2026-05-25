export const mockHostels = [
  {
    id: 1,
    slug: "shree-sawaria-house",
    name: "Shree Sawaria House",
    image: "/hostels/sawariya01.jpeg",
    location: "B-46, Ansal Golf Link-1, Near Pari Chowk, Greater Noida",
    price: 8500, // Starting price
    rating: 4.9,
    gender: "Unisex",
    distance: "500m from Pari Chowk Metro",
    description: "Shree Sawaria House is a quiet and welcoming space designed especially for male residents. Nestled near the bustling Pari Chowk, it blends convenience with community. Whether you are a student or a professional, our rooms reflect comfort and functionality.",
    
    // Media for the Swiper
    gallery: [
       { type: 'image', url: "/hostels/sawariya01.jpeg" },
      { type: 'image', url: "/hostels/sawariya02.jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.23.52 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.23.53 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.23.56 PM (2).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.00 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.03 PM.jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.02 PM.jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.02 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.02 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.01 PM (3).jpeg" },

      
    ],

    // Detailed Amenities Categories
    amenities: [
      { name: "24/7 Security", icon: "Shield" },
      { name: "CCTV Cameras", icon: "Camera" },
      { name: "Air Conditioned", icon: "Wind" },
      { name: "High Speed Wi-Fi", icon: "Wifi" },
      { name: "24/7 Canteen", icon: "Coffee" },
      { name: "Elevator", icon: "ArrowUp" },
      { name: "Library & Hall", icon: "BookOpen" },
      { name: "Gym", icon: "Dumbbell" },
      { name: "Laundry Service", icon: "Waves" },
      { name: "Stationary Shop", icon: "PenTool" },
      { name: "Pick & Drop", icon: "Bus" },
      { name: "RO Water", icon: "Droplets" },
    ],

    // Nearby Institutions for Greater Noida
    institutions: [
      "Galgotias University (15 mins)",
      "Sharda University (10 mins)",
      "G.L. Bajaj Institute (8 mins)",
      "Bennett University (20 mins)",
      "Knowledge Park II & III (5 mins)"
    ],

    // Room Types
    occupancy: ["Private", "Twin Sharing"],

    // Reviews
    reviews: [
      { user: "Amit Kumar", rating: 5, comment: "The food is very hygienic and the 24/7 canteen is a lifesaver for late-night studies." },
      { user: "Vikram Singh", rating: 4, comment: "Best connectivity to Pari Chowk. The library environment is very peaceful." },
      { user: "Sandeep J.", rating: 5, comment: "Excellent placement support and very helpful maintenance staff." }
    ]
  },
 
];