const fs = require('fs').promises

export default async function readFile(filePath: String) {
  // Specify the path to your JSON file
  let jsonData

  // Read the JSON file
  try {
    // Read the contents of the JSON file
    const data = await fs.readFile(filePath, 'utf8')

    // Parse the JSON data
    jsonData = JSON.parse(data)
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error)
  }

  return jsonData
}
