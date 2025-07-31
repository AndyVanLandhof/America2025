// Fetch and analyze the holiday plan CSV data
const response = await fetch(
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Holiday%20Plan-2TrWPKza7QZ43RBiOMrFhwJm0gUe1M.csv",
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

console.log("\nParsed Holiday Data:")
console.log(JSON.stringify(data, null, 2))

// Group by location/hotel for better organization
const groupedData = {}
data.forEach((day) => {
  const hotel = day.Hotel || "Unknown"
  if (!groupedData[hotel]) {
    groupedData[hotel] = []
  }
  groupedData[hotel].push(day)
})

console.log("\nGrouped by Hotel/Location:")
Object.keys(groupedData).forEach((hotel) => {
  console.log(`\n${hotel}:`)
  groupedData[hotel].forEach((day) => {
    console.log(`  - ${day.Date}`)
  })
})
