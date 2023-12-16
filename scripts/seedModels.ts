import * as ModelServices from '../src/db/model'
import readFile from './Helpers/readfile'

async function seedModels(models: string[]) {
  for (const model of models) {
    await ModelServices.createModel(model)
  }

}

async function main() {
  const models = await readFile('../Data/models.json')
  await seedModels(models)
}


main()
