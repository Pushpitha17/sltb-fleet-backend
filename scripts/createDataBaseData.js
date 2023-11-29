const fs = require('fs').promises
const _ = require('lodash')

async function main() {
  let data = await readFile()
  // createDepots(data)
  // createTypes(data)
  // createModels(data)
  createPrefixes(data)
}

main()

//extract models
function createModels(arr) {
  const models = []

  arr.forEach((i) => {
    let model = i['Make and Model'].trim()

    if (!models.includes(model)) {
      models.push(model)
    }
  })

  saveData(models.sort(), 'models.json')
}

//extract types
function createTypes(arr) {
  const types = []

  arr.forEach((i) => {
    let type = {
      name: i.Type,
      model: i['Make and Model'],
    }

    if (_.findIndex(types, type) == -1) {
      types.push(type)
    }
  })

  saveData(types, 'types.json')
}

//extract depots
function createDepots(arr) {
  const depots = []

  arr.forEach((i) => {
    let depot = i.Depot.trim().toLowerCase()

    if (!depots.includes(depot)) {
      depots.push(depot)
    }
  })

  for (let i = 0; i < depots.length; i++) {
    depots[i] = depots[i][0].toUpperCase() + depots[i].slice(1)
  }

  saveData(depots.sort(), 'depots.json')
}

//extract prefix
function createPrefixes(arr) {
  const prefixes = []

  arr.forEach((i) => {
    let prefix = i['R. No'].split('-')[0].trim()

    if (!prefixes.includes(prefix)) {
      prefixes.push(prefix)
    }
  })

  saveData(prefixes.sort(), 'prefixes.json')
}

async function readFile() {
  // Specify the path to your JSON file
  const filePath = '../Data/seed_data.json'
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

function saveData(data, filename) {
  const filePath = `../Data/${filename}`

  const jsonString = JSON.stringify(data, null, 2)

  fs.writeFile(filePath, jsonString, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err)
    } else {
      console.log('File has been successfully written!')
    }
  })
}
