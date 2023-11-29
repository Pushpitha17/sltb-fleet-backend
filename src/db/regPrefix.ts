import { prisma } from "./client";
import type { RegPrefix } from "@prisma/client";

export const listPrefix = async (): Promise<RegPrefix[]> => {
  return prisma.regPrefix.findMany()
}

export const getPrefix = async (id: number): Promise<RegPrefix> => {
  return prisma.regPrefix.findUnique({
    where: {
      id,
    }
  })
}

export const createPrefix = async (prefix: string): Promise<RegPrefix> => {
  return prisma.regPrefix.create({
    data: {
      prefix: prefix
    }
  })
}

export const updatePrefix = async (id: number, prefix: string): Promise<RegPrefix> => {
  return prisma.regPrefix.update({
    where: { id },
    data: {
      prefix: prefix
    }
  })
}

export const deletePrefix = async (id: number): Promise<RegPrefix> => {
  return prisma.regPrefix.delete({
    where: {
      id,
    }
  })
}