import { parseJsonArray } from '@helpers/parseJsonArray'
import { snakeCaseToCamelCase } from '@helpers/snakeCaseToCamelCase'
import type { IProject, IStoredProject } from '../types'

export const storedProjectToProject = ({ stack, ...storedProject }: IStoredProject): IProject => ({
  ...snakeCaseToCamelCase<Omit<IStoredProject, 'stack'>, Omit<IProject, 'stack'>>(storedProject),
  stack: stack ? parseJsonArray(stack) : []
})
