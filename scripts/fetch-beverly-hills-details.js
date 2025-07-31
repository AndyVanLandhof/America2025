// Fetch the detailed Beverly Hills itinerary
const response = await fetch(
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bev%20hills%20itinerary-UBfUKmhR07BzSKpvEsfTHOO9fkYO0N.csv",
)
const csvText = await response.text()

console.log("Beverly Hills Itinerary CSV:")
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

console.log("\nParsed Beverly Hills Data:")
console.log(JSON.stringify(data, null, 2))

// Organize by date for better structure
data.forEach((day, index) => {
  console.log(`\n${day.Date}:`)
  console.log(`  Activity: ${day.Activity || "Free time"} ${day.Time ? `at ${day.Time}` : ""}`)
  console.log(`  Lunch: ${day["Lunch Reservation"] || "No reservation"} ${day["Time.1"] ? `at ${day["Time.1"]}` : ""}`)
  console.log(
    `  Dinner: ${day["Dinner Reservation"] || "No reservation"} ${day["Time.2"] ? `at ${day["Time.2"]}` : ""}`,
  )
})
