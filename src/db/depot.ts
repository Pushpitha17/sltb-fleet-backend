import { prisma } from "../db/client";
import type { Depot } from "@prisma/client";

export const listDepots = async (): Promise<Depot[]> => {
  return prisma.depot.findMany()
}

export const getDepot = async (id: number): Promise<Depot> => {
  return prisma.depot.findUnique({
    where: {
      id,
    }
  })
}

export const createDepot = async (depotName: string): Promise<Depot> => {
  return prisma.depot.create({
    data: {
      name: depotName
    }
  })
}

export const updateDepot = async (id: number, depotName: string): Promise<Depot> => {
  return prisma.depot.update({
    where: { id },
    data: {
      name: depotName
    }
  })
}

export const deleteDepot = async (id: number): Promise<Depot> => {
  return prisma.depot.delete({
    where: {
      id,
    }
  })
}