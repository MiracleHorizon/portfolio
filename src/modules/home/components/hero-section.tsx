import { PROFILE_NAME } from '@site/profile'

export const HeroSection = () => (
  <section>
    <h1 className='text-xl font-bold md:text-2xl 2xl:text-4xl'>
      Hi, I&apos;m <span className='gradient-highlight'>{PROFILE_NAME}</span> - Frontend Developer
    </h1>

    <p className='md:text-md max-w-4xl leading-8 text-gray-700 dark:text-gray-200 md:mt-4 2xl:text-lg'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur distinctio
      doloremque eius, eligendi, enim explicabo illum, ipsum labore minus modi nihil possimus rem
      totam voluptates. Animi blanditiis dolore dolorem hic illo illum in iste laborum modi nemo
      nisi obcaecati perspiciatis placeat provident quam quis recusandae rem repellendus, tempora
      ut.
    </p>
  </section>
)
