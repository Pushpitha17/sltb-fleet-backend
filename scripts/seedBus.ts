import * as DepotService from '../src/db/depot'
import * as PrefixServices from '../src/db/regPrefix'
import * as ModelServices from '../src/db/model'
import * as TypeServices from '../src/db/type'
import * as BusServices from '../src/db/bus'
import readFile from './Helpers/readfile';
const fs = require('fs').promises;
const csvFilePath = "../Data/seededData.csv";

type DepotMap = {
  [key: string]: string;
};

const map_depots: DepotMap = {
  "Gaampaha": "Gampaha",
  "Horowpothana": "Horoupathana",
  "Kalmunai": "Kalmunei",
  "Kareinager": "Kareinagar",
  "Kataragama": "Katharagama",
  "Kebithgollewa": "Kebithigollewa",
  "Kebithigollawa": "Kebithigollewa",
  "Kesbawa": 'Kesbewa',
  "Samanturei": 'Samanthurei'

}

type seedItem = {
  R_No?: string,
  prefixId?: number,
  R_from?: string
  img_url?: string
  articl_url?: string
  modelId: number,
  depotId: number,
  typeId?: number
}

async function seedBus(seedItems: seedItem[]) {

  console.log(seedItems.length)

  let i = 14000

  for (const bus of seedItems) {

    try {
      const { R_No, R_from, img_url, articl_url, modelId, depotId, typeId, prefixId } = bus

      //check existing
      const existingRecords = await BusServices.checkExisting(R_No, prefixId, modelId, depotId, typeId)

      if (existingRecords.length) {
        console.log("existing record", existingRecords[0]["id"],)
        const existingContent = await fs.readFile(csvFilePath, 'utf8');

        // Append the new line to the existing content
        const valuesAsString = `Existing Row ${i}`;

        const newContent = `${existingContent}${valuesAsString}\n`;

        // Write the updated content back to the CSV file
        await fs.writeFile(csvFilePath, newContent, 'utf8');
        i++
        continue
      }

      const addedBus = await BusServices.addBus({ R_No, R_from, img_url, articl_url }, modelId, depotId, typeId, prefixId)
      i++
      console.log(addedBus, i)

      const existingContent = await fs.readFile(csvFilePath, 'utf8');

      // Append the new line to the existing content
      const valuesAsString = Object.values(addedBus).join(',');

      const newContent = `${existingContent}${valuesAsString}\n`;

      // Write the updated content back to the CSV file
      await fs.writeFile(csvFilePath, newContent, 'utf8');


    } catch (error) {
      console.log(error)
    }
  }
}

async function main() {
  const seedData = await readFile('../Data/seed_data.json')
  const seedItems: seedItem[] = []
  console.log(seedData.length)
  let j = 0

  for (const item of seedData.slice(14000, 15000)) {
    let seedItem: seedItem = {
      modelId: 0,
      depotId: 0
    }

    try {

      const regNo = item["R. No"].split("-")

      if (regNo.length == 2) {
        seedItem["R_No"] = regNo[1]
        const prefix = await PrefixServices.getPrefixByName(regNo[0])
        seedItem.prefixId = prefix.id
      } else {
        seedItem["R_No"] = undefined
        const prefix = await PrefixServices.getPrefixByName("Unavailable")
        seedItem.prefixId = prefix.id
      }

      const model = await ModelServices.getModelByName(item["Make and Model"])
      seedItem.modelId = model.id

      if (Object.keys(map_depots).includes(item["Depot"])) {
        item["Depot"] = map_depots[String(item["Depot"])]
      }

      const depot = await DepotService.getDepotByName(item["Depot"])
      seedItem.depotId = depot.id


      if (item["Type"]) {
        const type = await TypeServices.getTypeByModelandName(seedItem.modelId, item["Type"])
        seedItem.typeId = type.id
      }

      item["Image url"] ? seedItem["img_url"] = item["Image url"] : null
      item["article url"] ? seedItem["articl_url"] = item["article url"] : null
      item["R.from"] ? seedItem["R_from"] = item["R.from"] : null

      seedItems.push(seedItem)
      j++
      console.log(j)
    } catch (error) {
      console.log(error)
    }


  }

  await seedBus(seedItems)


}


main()