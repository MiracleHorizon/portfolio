import prisma from '@lib/prisma'
import type { IStoredProject } from '../types'

interface Parameters {
  skip?: number
  take?: number
}

export const fetchManyProjects = async (parameters?: Parameters): Promise<IStoredProject[]> => {
  try {
    return prisma.project.findMany({
      orderBy: {
        id: 'asc'
      },
      ...parameters
    })
  } catch (err) {
    console.error(err)

    return []
  }
}
