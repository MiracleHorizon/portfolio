import prisma from '@lib/prisma'
import type { IStoredProject } from '@app/projects/types'

export const getProject = async (title: string): Promise<IStoredProject | null> => {
  try {
    return await prisma.project.findFirst({
      where: {
        title
      }
    })
  } catch (err) {
    console.error(err)

    return null
  }
}
