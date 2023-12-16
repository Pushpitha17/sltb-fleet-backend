import * as ModelServices from '../src/db/model'
import * as TypeServices from '../src/db/type'
import readFile from './Helpers/readfile'

type typeData = {
  modelId: number,
  name: string
  model: string
}

async function seedTypes(types: typeData[]) {

  for (const type of types) {
    const { modelId, name } = type

    const createdType = await TypeServices.createType({ modelId, name })
    console.log(createdType)
  }

}

async function main() {
  const types = await readFile('../Data/types.json')
  console.log(types.length)
  for (const type of types) {
    const model = await ModelServices.getModelByName(type.model)
    type.modelId = model.id
  }

  seedTypes(types)

}


main()
