import { prisma } from "./client";
import type { Bus } from "@prisma/client";


type busUpdate = {
  prefixId?: number
  R_No?: string
  R_from?: string
  img_url?: string
  articl_url?: string
  modelId?: number
  typeId?: number
  depotId?: number
  createdAt?: Date
  updatedAt: Date
};

type busCreate = {
  R_No?: string
  R_from?: string
  img_url?: string
  articl_url?: string
  updatedAt?: Date | null
}

export const listBusesFromModel = async (modelId: number): Promise<Bus[]> => {
  return prisma.bus.findMany({
    where: {
      modelId,
    },
    include: {
      model: true,
      type: true,
      depot: true,
    },
  })
}

export const listBusesFromDepot = async (depotId: number): Promise<Bus[]> => {
  return prisma.bus.findMany({
    where: {
      depotId,
    },
    include: {
      model: true,
      type: true,
      depot: true,
    },
  })
}

export const getBusByID = async (id: number): Promise<Bus> => {
  return prisma.bus.findUnique({
    where: {
      id,
    },
    include: {
      model: true,
      type: true,
      depot: true,
    },
  })
}

export const checkExisting = async (R_No: string | undefined, prefixId: number | undefined, modelId: number, depotId: number, typeId: number | undefined): Promise<Bus[]> => {
  return prisma.bus.findMany({
    where: {
      R_No,
      prefixId
    }
  })
}


export const addBus = async (createData: busCreate, modelId: number, depotId: number, typeId?: number, prefixId?: number): Promise<Bus> => {
  return prisma.bus.create({
    data: {
      ...createData,
      model: { connect: { id: modelId } },
      depot: { connect: { id: depotId } },
      type: { connect: { id: typeId } },
      prefix: { connect: { id: prefixId } },
    }
  })
}

export const updateBus = async (id: number, updateData: busUpdate): Promise<Bus> => {
  return prisma.bus.update({
    where: { id },
    data: {
      ...updateData
    }
  })
}

export const deleteBus = async (id: number): Promise<Bus> => {
  return prisma.bus.delete({
    where: {
      id,
    }
  })
}