import { SkillsSection } from './skills-section'
import { HeroSection } from './hero-section'
import { Separator } from '@ui/separator'

export function Home() {
  return (
    <main className='flex flex-col md:w-4/5'>
      <HeroSection />

      <Separator className='mb-6 mt-4' />

      <SkillsSection />
    </main>
  )
}
