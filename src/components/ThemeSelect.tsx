'use client'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/Select'

const iconsSizes = {
  width: 20,
  height: 20
} as const

const themes = [
  {
    value: 'system',
    icon: <MonitorIcon {...iconsSizes} />
  },
  {
    value: 'light',
    icon: <SunIcon {...iconsSizes} />
  },
  {
    value: 'dark',
    icon: <MoonIcon {...iconsSizes} />
  }
] as const

export function ThemeSelect() {
  const { theme, setTheme } = useTheme()

  return (
    <Select value={typeof window !== 'undefined' ? theme : 'system'} onValueChange={setTheme}>
      <SelectTrigger>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>

      <SelectContent>
        {themes.map(theme => (
          <SelectItem
            key={theme.value}
            value={theme.value}
            className='justify-start'
            arrowPosition='right'
          >
            <div className='flex items-center gap-x-2'>
              {theme.icon}

              <span className='capitalize'>{theme.value}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
