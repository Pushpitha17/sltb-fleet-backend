import * as DepotService from '../src/db/depot'
import readFile from './Helpers/readfile';

const exclude = ["Gaampaha", "Horowpothana", "Kalmunai", "Kareinager", "Kataragama", "Kebithgollewa", "Kebithigollawa", "Kesbawa", "Samanturei"]

async function seedDepots(depots: string[]) {
  depots.push("No Depot")

  for (const depot of depots) {
    const createdDepot = await DepotService.createDepot(depot)
    console.log(createdDepot)
  }

}

async function main() {
  const depotData = await readFile('../Data/depots.json')
  console.log(depotData.length)

  const filteredDepots = depotData.filter((str: string) => !exclude.includes(str));
  console.log(filteredDepots.length)

  await seedDepots(depotData)
}


main()



