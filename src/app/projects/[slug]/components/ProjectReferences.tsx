import { ExternalLinkIcon } from 'lucide-react'

import { ProjectLink } from './ProjectLink'
import { GitHubLogo } from '@ui/logos/GitHubLogo'
import { mergeCn } from '@lib/tailwind-merge'

interface Props {
  linkRepo?: string
  linkDemo?: string
  className?: string
}

export const ProjectReferences = ({ linkRepo, linkDemo, className }: Props) => (
  <div className={mergeCn('flex gap-4', className)}>
    {linkRepo && <ProjectLink url={linkRepo} text='Source Code' icon={<GitHubLogo />} />}

    {linkRepo && linkDemo && <span className='text-neutral-400 dark:text-neutral-600'>|</span>}

    {linkDemo && <ProjectLink url={linkDemo} text='Live Demo' icon={<ExternalLinkIcon />} />}
  </div>
)
