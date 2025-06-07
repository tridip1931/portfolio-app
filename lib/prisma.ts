import { PrismaClient } from '@prisma/client'

// Singleton pattern for Prisma client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// In development, store the client on the global object to prevent
// creating multiple instances during hot reloads
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 