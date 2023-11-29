const fs = require('fs').promises

async function readFile(filePath) {
  let jsonData

  // Read the JSON file
  try {
    // Read the contents of the JSON file
    const data = await fs.readFile(filePath, 'utf8')

    // Parse the JSON data
    jsonData = JSON.parse(data)

    console.log('JSON data:', jsonData)
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error)
  }

  return jsonData
}