import * as DepotService from '../src/db/depot'
const fs = require('fs').promises
import type { Depot } from "@prisma/client";


async function readFile() {
  // Specify the path to your JSON file
  const filePath = '../Data/depots.json'
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

async function seedDepots(depots: string[]) {

  for (const depot of depots) {
    await DepotService.createDepot(depot)
  }

}

async function main() {
  const depotData = await readFile()
  await seedDepots(depotData)
}


main()



