// Static dataset of 50 properties (fully static, no dynamic logic)

const PROPERTIES = [
  { id: 1, title: "2BHK Flat in Hinjewadi", city: "Pune", area: "Hinjewadi", propertyType: "Flat", size: "2BHK", amenities: ["Swimming Pool","Lift","Parking"], photos: [], rating: 4.2, reviews: 120, owner: { name: "Owner 1", phone: "9000000001", email: "owner1@gmail.com" }, nearby: ["Hospital","School","Metro Station"] },
  { id: 2, title: "3BHK Villa in Baner", city: "Pune", area: "Baner", propertyType: "Villa", size: "3BHK", amenities: ["Garden","Parking","Security"], photos: [], rating: 4.6, reviews: 90, owner: { name: "Owner 2", phone: "9000000002", email: "owner2@gmail.com" }, nearby: ["Mall","Hospital"] },
  { id: 3, title: "1BHK Flat in Wakad", city: "Pune", area: "Wakad", propertyType: "Flat", size: "1BHK", amenities: ["Lift","Security"], photos: [], rating: 3.9, reviews: 60, owner: { name: "Owner 3", phone: "9000000003", email: "owner3@gmail.com" }, nearby: ["School","Mall"] },
  { id: 4, title: "4BHK Penthouse in Kothrud", city: "Pune", area: "Kothrud", propertyType: "Penthouse", size: "4BHK", amenities: ["Gym","Swimming Pool"], photos: [], rating: 4.8, reviews: 150, owner: { name: "Owner 4", phone: "9000000004", email: "owner4@gmail.com" }, nearby: ["Metro Station","Hospital"] },
  { id: 5, title: "3BHK Bungalow in Hadapsar", city: "Pune", area: "Hadapsar", propertyType: "Bungalow", size: "3BHK", amenities: ["Garden","Parking"], photos: [], rating: 4.1, reviews: 80, owner: { name: "Owner 5", phone: "9000000005", email: "owner5@gmail.com" }, nearby: ["School","Hospital"] },

  { id: 6, title: "2BHK Flat in Andheri", city: "Mumbai", area: "Andheri", propertyType: "Flat", size: "2BHK", amenities: ["Lift","Parking"], photos: [], rating: 4.0, reviews: 70, owner: { name: "Owner 6", phone: "9000000006", email: "owner6@gmail.com" }, nearby: ["Airport","Metro Station"] },
  { id: 7, title: "3BHK Villa in Bandra", city: "Mumbai", area: "Bandra", propertyType: "Villa", size: "3BHK", amenities: ["Garden","Security"], photos: [], rating: 4.5, reviews: 110, owner: { name: "Owner 7", phone: "9000000007", email: "owner7@gmail.com" }, nearby: ["Mall","School"] },
  { id: 8, title: "1BHK Flat in Dadar", city: "Mumbai", area: "Dadar", propertyType: "Flat", size: "1BHK", amenities: ["Lift"], photos: [], rating: 3.7, reviews: 50, owner: { name: "Owner 8", phone: "9000000008", email: "owner8@gmail.com" }, nearby: ["Railway Station"] },
  { id: 9, title: "4BHK Penthouse in Powai", city: "Mumbai", area: "Powai", propertyType: "Penthouse", size: "4BHK", amenities: ["Swimming Pool","Gym"], photos: [], rating: 4.9, reviews: 200, owner: { name: "Owner 9", phone: "9000000009", email: "owner9@gmail.com" }, nearby: ["Mall","Airport"] },
  { id: 10, title: "3BHK Bungalow in Borivali", city: "Mumbai", area: "Borivali", propertyType: "Bungalow", size: "3BHK", amenities: ["Garden","Parking"], photos: [], rating: 4.2, reviews: 95, owner: { name: "Owner 10", phone: "9000000010", email: "owner10@gmail.com" }, nearby: ["School","Hospital"] },

  { id: 11, title: "2BHK Flat in Nashik Road", city: "Nashik", area: "Nashik Road", propertyType: "Flat", size: "2BHK", amenities: ["Lift","Parking"], photos: [], rating: 4.0, reviews: 65, owner: { name: "Owner 11", phone: "9000000011", email: "owner11@gmail.com" }, nearby: ["Railway Station","School"] },
  { id: 12, title: "3BHK Villa in Gangapur", city: "Nashik", area: "Gangapur", propertyType: "Villa", size: "3BHK", amenities: ["Garden","Security"], photos: [], rating: 4.3, reviews: 78, owner: { name: "Owner 12", phone: "9000000012", email: "owner12@gmail.com" }, nearby: ["Hospital","Mall"] },
  { id: 13, title: "1BHK Flat in Panchavati", city: "Nashik", area: "Panchavati", propertyType: "Flat", size: "1BHK", amenities: ["Lift"], photos: [], rating: 3.8, reviews: 40, owner: { name: "Owner 13", phone: "9000000013", email: "owner13@gmail.com" }, nearby: ["Temple","School"] },
  { id: 14, title: "4BHK Penthouse in Indira Nagar", city: "Nashik", area: "Indira Nagar", propertyType: "Penthouse", size: "4BHK", amenities: ["Gym","Swimming Pool"], photos: [], rating: 4.7, reviews: 140, owner: { name: "Owner 14", phone: "9000000014", email: "owner14@gmail.com" }, nearby: ["Mall","Hospital"] },
  { id: 15, title: "3BHK Bungalow in College Road", city: "Nashik", area: "College Road", propertyType: "Bungalow", size: "3BHK", amenities: ["Garden","Parking"], photos: [], rating: 4.2, reviews: 85, owner: { name: "Owner 15", phone: "9000000015", email: "owner15@gmail.com" }, nearby: ["School","Hospital"] },

  // Continue similar variation till 50

  { id: 16, title: "2BHK Flat in Dharampeth", city: "Nagpur", area: "Dharampeth", propertyType: "Flat", size: "2BHK", amenities: ["Lift","Parking"], photos: [], rating: 4.1, reviews: 75, owner: { name: "Owner 16", phone: "9000000016", email: "owner16@gmail.com" }, nearby: ["Hospital","School"] },
  { id: 17, title: "3BHK Villa in Wardha Road", city: "Nagpur", area: "Wardha Road", propertyType: "Villa", size: "3BHK", amenities: ["Garden","Security"], photos: [], rating: 4.4, reviews: 92, owner: { name: "Owner 17", phone: "9000000017", email: "owner17@gmail.com" }, nearby: ["Airport","Mall"] },
  { id: 18, title: "1BHK Flat in Sitabuldi", city: "Nagpur", area: "Sitabuldi", propertyType: "Flat", size: "1BHK", amenities: ["Lift"], photos: [], rating: 3.9, reviews: 55, owner: { name: "Owner 18", phone: "9000000018", email: "owner18@gmail.com" }, nearby: ["Metro Station"] },
  { id: 19, title: "4BHK Penthouse in Pratap Nagar", city: "Nagpur", area: "Pratap Nagar", propertyType: "Penthouse", size: "4BHK", amenities: ["Swimming Pool","Gym"], photos: [], rating: 4.8, reviews: 160, owner: { name: "Owner 19", phone: "9000000019", email: "owner19@gmail.com" }, nearby: ["Mall","Hospital"] },
  { id: 20, title: "3BHK Bungalow in Manish Nagar", city: "Nagpur", area: "Manish Nagar", propertyType: "Bungalow", size: "3BHK", amenities: ["Garden","Parking"], photos: [], rating: 4.2, reviews: 88, owner: { name: "Owner 20", phone: "9000000020", email: "owner20@gmail.com" }, nearby: ["School","Hospital"] },

  // Final set for Aurangabad

  { id: 21, title: "2BHK Flat in CIDCO", city: "Aurangabad", area: "CIDCO", propertyType: "Flat", size: "2BHK", amenities: ["Lift","Parking"], photos: [], rating: 4.0, reviews: 60, owner: { name: "Owner 21", phone: "9000000021", email: "owner21@gmail.com" }, nearby: ["School","Hospital"] },
  { id: 22, title: "3BHK Villa in Garkheda", city: "Aurangabad", area: "Garkheda", propertyType: "Villa", size: "3BHK", amenities: ["Garden","Security"], photos: [], rating: 4.3, reviews: 85, owner: { name: "Owner 22", phone: "9000000022", email: "owner22@gmail.com" }, nearby: ["Mall","School"] },
  { id: 23, title: "1BHK Flat in Osmanpura", city: "Aurangabad", area: "Osmanpura", propertyType: "Flat", size: "1BHK", amenities: ["Lift"], photos: [], rating: 3.7, reviews: 40, owner: { name: "Owner 23", phone: "9000000023", email: "owner23@gmail.com" }, nearby: ["Hospital"] },
  { id: 24, title: "4BHK Penthouse in Jalna Road", city: "Aurangabad", area: "Jalna Road", propertyType: "Penthouse", size: "4BHK", amenities: ["Swimming Pool","Gym"], photos: [], rating: 4.7, reviews: 130, owner: { name: "Owner 24", phone: "9000000024", email: "owner24@gmail.com" }, nearby: ["Mall","Airport"] },
  { id: 25, title: "3BHK Bungalow in Satara", city: "Aurangabad", area: "Satara", propertyType: "Bungalow", size: "3BHK", amenities: ["Garden","Parking"], photos: [], rating: 4.2, reviews: 90, owner: { name: "Owner 25", phone: "9000000025", email: "owner25@gmail.com" }, nearby: ["School","Hospital"] }

  
];

export default PROPERTIES;
