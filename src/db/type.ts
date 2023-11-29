import { prisma } from "./client";
import type { Type } from "@prisma/client";

type typeWrite = {
  modelId: number,
  name: string
};

export const listTypesInModel = async (modelId: number): Promise<Type[]> => {
  return prisma.type.findMany({
    where: {
      modelId,
    }
  })
}

export const getType = async (id: number): Promise<Type> => {
  return prisma.type.findUnique({
    where: {
      id,
    }
  })
}

export const createType = async (type: typeWrite): Promise<Type> => {
  return prisma.type.create({
    data: {
      name: type.name,
      model: { connect: { id: type.modelId } },
    }
  })
}

export const updateType = async (id: number, type: typeWrite): Promise<Type> => {
  return prisma.type.update({
    where: { id },
    data: {
      ...type
    }
  })
}

export const deleteType = async (id: number): Promise<Type> => {
  return prisma.type.delete({
    where: {
      id,
    }
  })
}