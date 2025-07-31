// Fetch and correctly parse the hotel booking references
const response = await fetch(
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Itinerary%20detials-bvcUsIfqCjx0gllFPyrlF5S9rfC2zU.csv",
)
const csvText = await response.text()

console.log("Raw CSV Data:")
console.log(csvText)

// Parse CSV data more carefully
const lines = csvText.trim().split("\n")
const headers = lines[0].split(",")
const data = []

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(",")
  const row = {}
  headers.forEach((header, index) => {
    row[header.trim()] = values[index]?.trim() || ""
  })
  data.push(row)
}

console.log("\nParsed Data:")
console.log(JSON.stringify(data, null, 2))

// Extract hotel booking references (only from hotel entries, not travel)
const hotelEntries = data.filter((item) => item[""] === "Hotel")
const hotelBookingReferences = {}

hotelEntries.forEach((entry) => {
  const hotelName = entry.Hotel
  const bookingRef = entry["Hotel Booking Reference"]

  // Only store if we have a booking reference and haven't seen this hotel before
  if (bookingRef && bookingRef !== "" && !hotelBookingReferences[hotelName]) {
    hotelBookingReferences[hotelName] = bookingRef
  }
})

console.log("\nHotel Booking References:")
Object.keys(hotelBookingReferences).forEach((hotel) => {
  console.log(`${hotel}: ${hotelBookingReferences[hotel]}`)
})

// Also extract flight booking references from travel entries
const travelEntries = data.filter((item) => item[""] === "Travel")
console.log("\nTravel Entries:")
travelEntries.forEach((entry) => {
  console.log(`${entry.Date}: ${entry.Hotel} - Booking Ref: ${entry["Hotel Booking Reference"]}`)
})
