'use client'

import { type PropsWithChildren, useEffect, useState } from 'react'
import {
  PrismLight as SyntaxHighlighter,
  type SyntaxHighlighterProps
} from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import { a11yDark as themeColor } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useCopyToClipboard } from 'usehooks-ts'

const languages = {
  javascript: 'javascript',
  typescript: 'typescript',
  diff: 'diff',
  tsx: 'tsx',
  css: 'css'
}

SyntaxHighlighter.registerLanguage(languages.javascript, javascript)
SyntaxHighlighter.registerLanguage(languages.typescript, typescript)
SyntaxHighlighter.registerLanguage(languages.diff, diff)
SyntaxHighlighter.registerLanguage(languages.tsx, tsx)
SyntaxHighlighter.registerLanguage(languages.css, css)

type Props = PropsWithChildren<{
  className?: string
  inline?: boolean
}> &
  SyntaxHighlighterProps

export const CodeBlock = ({ className = '', children, inline, ...props }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [, copy] = useCopyToClipboard()
  const match = /language-(\w+)/.exec(className || '')

  const handleCopy = () => {
    void copy(children.toString())
    setIsCopied(true)
  }

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }

    return
  }, [isCopied])

  return (
    <>
      {!inline ? (
        <div className='relative'>
          <button
            className='absolute right-3 top-3 rounded-lg border border-neutral-700 p-2 hover:bg-neutral-800'
            type='button'
            aria-label='Copy to Clipboard'
            onClick={handleCopy}
            data-umami-event='Click Copy Code'
          >
            {!isCopied ? (
              <CopyIcon size={18} className='text-neutral-400' />
            ) : (
              <CheckIcon size={18} className='text-green-600' />
            )}
          </button>

          <SyntaxHighlighter
            {...props}
            style={themeColor}
            customStyle={{
              padding: '20px',
              fontSize: '14px',
              borderRadius: '8px',
              paddingRight: '50px'
            }}
            PreTag='div'
            language={match ? match[1] : 'javascript'}
            wrapLongLines
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className='rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300'>
          {children}
        </code>
      )}
    </>
  )
}
