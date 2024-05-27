import { GITHUB_API_RAW } from '@site/github'

interface Parameters {
  owner: string
  repository: string
  branch: string
}

export const createRepoRawUrl = ({ owner, repository, branch }: Parameters): string =>
  `${GITHUB_API_RAW}/${owner}/${repository}/${branch}`
