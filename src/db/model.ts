import { prisma } from "../db/client";
import type { Model } from "@prisma/client";

export const listModels = async (): Promise<Model[]> => {
  return prisma.model.findMany()
}

export const getModel = async (id: number): Promise<Model> => {
  return prisma.model.findUnique({
    where: {
      id,
    }
  })
}

export const createModel = async (modelName: string): Promise<Model> => {
  return prisma.model.create({
    data: {
      name: modelName
    }
  })
}

export const updateModel = async (id: number, modelName: string): Promise<Model> => {
  return prisma.model.update({
    where: { id },
    data: {
      name: modelName
    }
  })
}

export const deleteModel = async (id: number): Promise<Model> => {
  return prisma.model.delete({
    where: {
      id,
    }
  })
}