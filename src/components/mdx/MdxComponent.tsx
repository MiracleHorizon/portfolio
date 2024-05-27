import type { PropsWithChildren } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import dynamic from 'next/dynamic'

import { mergeCn } from '@lib/tailwind-merge'

const MdxCodeBlock = dynamic(() => import('./MdxCodeBlock').then(mod => mod.MdxCodeBlock), {
  ssr: false,
  loading: () => <div className='mb-12 mt-12 h-36 w-full' />
})

const Table = ({ children }: PropsWithChildren) => (
  <div className='table-container'>
    <table className='table w-full'>{children}</table>
  </div>
)

interface MarkdownRendererProps {
  children: string
}

interface Props extends MarkdownRendererProps {
  repoUrl: string
  repoRawUrl: string
}

export const MDXComponent = ({ children, repoUrl, repoRawUrl }: Props) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      br: () => <br />,
      a: ({ href, target, className, ...props }) => {
        if (!href) {
          return null
        }

        // Currently, assets are not supported
        if (href.startsWith(`${repoUrl}/assets`)) {
          return null
        }

        return (
          <a
            href={href}
            target={target ?? '_blank'}
            className={mergeCn(
              'cursor-pointer text-sky-500 hover:text-sky-400 hover:underline',
              className
            )}
            {...props}
          />
        )
      },
      p: ({ className, ...props }) => <div className={mergeCn('mb-3', className)} {...props} />,
      h2: props => <h2 className='mb-4 text-xl font-medium dark:text-neutral-300' {...props} />,
      h3: props => (
        <h3
          className='mb-4 pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300'
          {...props}
        />
      ),
      ul: props => <ul className='mb-3 list-disc space-y-3 pl-10' {...props} />,
      ol: props => <ol className='mb-3 list-decimal space-y-3 pl-10' {...props} />,
      code: props => <MdxCodeBlock {...props} />,
      blockquote: props => (
        <blockquote
          className='rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-200 py-3 pl-6  text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200'
          {...props}
        />
      ),
      img: ({ src, className, ...props }) => (
        <img src={`${repoRawUrl}/${src}`} {...props} className={mergeCn('my-4', className)} />
      ),
      table: props => <Table {...props} />,
      th: props => (
        <th className='border px-3 py-1 text-left dark:border-neutral-600'>{props.children}</th>
      ),
      td: props => <td className='border px-3  py-1 dark:border-neutral-600'>{props.children}</td>
    }}
  >
    {children}
  </ReactMarkdown>
)
