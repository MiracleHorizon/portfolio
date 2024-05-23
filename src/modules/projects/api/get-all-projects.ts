import prisma from '@lib/prisma'
import type { IStoredProject } from '../types'

export async function getAllProjects(): Promise<IStoredProject[]> {
  try {
    return prisma.project.findMany({
      orderBy: {
        id: 'asc'
      }
    })
  } catch (err) {
    console.error(err)

    return []
  }
}
