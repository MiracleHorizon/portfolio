import prisma from '@lib/prisma'
import type { IStoredProject } from '../types'

export const getProject = async (id: number): Promise<IStoredProject | null> => {
  try {
    return await prisma.project.findUnique({
      where: {
        id
      }
    })
  } catch (err) {
    console.error(err)

    return null
  }
}
