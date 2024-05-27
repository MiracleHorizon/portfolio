import { SkillsSection } from './SkillsSection'
import { HeroSection } from './HeroSection'
import { Separator } from '@ui/Separator'

export const Home = () => (
  <main className='flex flex-col md:w-4/5'>
    <HeroSection />

    <Separator className='mb-6 mt-4' />

    <SkillsSection />
  </main>
)
