import { PROFILE_NAME } from '@site/profile'

export default function Home() {
  return (
    <main className='flex flex-col md:w-4/5'>
      <section>
        <h1 className='text-xl font-bold md:text-2xl 2xl:text-4xl'>
          Hi, I&apos;m <span className='gradient-highlight'>{PROFILE_NAME}</span> - Frontend
          Developer
        </h1>

        <p className='md:text-md max-w-4xl leading-normal text-gray-700 dark:text-gray-200 md:mt-2 2xl:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, facilis ipsum, iste
          laudantium libero magnam magni modi molestiae, nam quod velit veniam voluptate? Ab eum
          iusto officiis placeat repellendus velit!
        </p>
      </section>
    </main>
  )
}
