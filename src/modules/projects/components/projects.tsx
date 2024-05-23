'use client'

import { useMemo } from 'react'

import { ProjectCard } from './project-card'
import { parseProjectStack } from '@lib/helpers/parseProjectStack'
import type { IStoredProject } from '../types'

export function Projects({ storedProjects }: Props) {
  const projects = useMemo(() => {
    if (storedProjects.length === 0) {
      return []
    }

    return storedProjects.map(project => ({
      ...project,
      linkRepo: project.link_repo,
      linkDemo: project.link_demo,
      stack: parseProjectStack(project.stack),
      linkReadme: project.link_readme_md
    }))
  }, [storedProjects])

  if (projects.length === 0) {
    return <main>No data :(</main>
  }

  return (
    <main className='w-full'>
      <ul className='grid w-full grid-cols-2 gap-4'>
        {projects.map(repository => (
          <ProjectCard key={repository.id} {...repository} />
        ))}
      </ul>
    </main>
  )
}

interface Props {
  storedProjects: IStoredProject[]
}
