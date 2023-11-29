import { prisma } from "./client";
import type { User } from "@prisma/client";


type userWrite = {
  email: string;
  password: string;
  username: string;
  salt: string;
  sessionToken?: string;
};

export const listUsers = async (): Promise<User[]> => {
  return prisma.user.findMany()
}

export const getUserByID = async (id: number): Promise<User> => {
  return prisma.user.findUnique({
    where: {
      id,
    }
  })
}

export const getUserByEmail = async (email: string): Promise<User> => {
  return prisma.user.findUnique({
    where: {
      email,
    }
  })
}

export const getUserBySession = async (sessionToken: string): Promise<User> => {
  return prisma.user.findFirst({
    where: {
      sessionToken,
    }
  })
}

export const createUser = async (user: userWrite): Promise<User> => {
  return prisma.user.create({
    data: {
      ...user
    }
  })
}

export const updateUser = async (id: number, user: User): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data: {
      ...user
    }
  })
}

export const deleteUser = async (id: number): Promise<User> => {
  return prisma.user.delete({
    where: {
      id,
    }
  })
}