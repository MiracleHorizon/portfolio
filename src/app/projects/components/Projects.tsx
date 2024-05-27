'use client'

import { useMemo } from 'react'

import { ProjectCard } from './ProjectCard'
import { storedProjectToProject } from '../helpers/storedProjectToProject'
import type { IStoredProject } from '../types'

interface Props {
  storedProjects: IStoredProject[]
}

export const Projects = ({ storedProjects }: Props) => {
  const projects = useMemo(() => {
    if (storedProjects.length === 0) {
      return []
    }

    return storedProjects.map(storedProjectToProject)
  }, [storedProjects])

  if (projects.length === 0) {
    return <main>No data :(</main>
  }

  return (
    <main className='w-full'>
      <ul className='flex w-full flex-col gap-4 sm:grid sm:grid-cols-2'>
        {projects.map(repository => (
          <ProjectCard key={repository.id} {...repository} />
        ))}
      </ul>
    </main>
  )
}
