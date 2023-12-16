import * as PrefixServices from '../src/db/regPrefix'
import readFile from './Helpers/readfile'

async function seedModels(prefixes: string[]) {
  for (const prefix of prefixes) {
    await PrefixServices.createPrefix(prefix)
  }

}

async function main() {
  const prefixes = await readFile('../Data/prefixes.json')
  await seedModels(prefixes)
}


main()
