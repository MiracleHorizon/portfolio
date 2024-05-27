import { Plus_Jakarta_Sans as Jakarta } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Layout } from '@components/Layout'
import { TanstackQueryProvider } from '@lib/tanstack-query'
import { DEFAULT_THEME, THEME_LS_KEY } from '@lib/theme/constants'
import { PROFILE_FULL_NAME } from '@site/profile'
import './globals.css'

const font = Jakarta({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    default: PROFILE_FULL_NAME,
    template: `%s - ${PROFILE_FULL_NAME}`
  }
}

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang='en' suppressHydrationWarning>
    <body className={font.className}>
      <ThemeProvider
        attribute='class'
        defaultTheme={DEFAULT_THEME}
        storageKey={THEME_LS_KEY}
        disableTransitionOnChange
      >
        <TanstackQueryProvider>
          <Layout>{children}</Layout>
        </TanstackQueryProvider>
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
