// Fetch and analyze the updated itinerary details CSV data
const response = await fetch(
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Itinerary%20detials-bvcUsIfqCjx0gllFPyrlF5S9rfC2zU.csv",
)
const csvText = await response.text()

console.log("Raw CSV Data:")
console.log(csvText)

// Parse CSV data
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

console.log("\nParsed Itinerary Data:")
console.log(JSON.stringify(data, null, 2))

// Group by type (Travel vs Hotel stays)
const travelEntries = data.filter((item) => item[""] === "Travel")
const hotelEntries = data.filter((item) => item[""] === "Hotel")

console.log("\nTravel Entries:")
travelEntries.forEach((entry) => {
  console.log(`${entry.Date}: ${entry.Hotel} - ${entry["Travel Notes"]} (${entry["Travel Time / Distance"]})`)
})

console.log("\nHotel Entries:")
hotelEntries.forEach((entry) => {
  console.log(
    `${entry.Date}: ${entry.Hotel} in ${entry.Location} - Night ${entry.Night} (Ref: ${entry["Hotel Booking Reference"]})`,
  )
})

// Analyze the structure for website updates
console.log("\nData Structure Analysis:")
console.log("Headers:", headers)
console.log("Total entries:", data.length)
console.log("Travel entries:", travelEntries.length)
console.log("Hotel entries:", hotelEntries.length)
