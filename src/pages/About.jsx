import { PageHeading, Technology } from '../components'

export function About() {
  return (
    <section className='grid gap-4'>
      <PageHeading>About</PageHeading>

      <p className='text-2xl'>
        This web app was made by{' '}
        <a
          className='font-bold hover:text-gray-300 transition-colors'
          href='https://github.com/CMRicardo'
          target='_blank'
        >
          CMRicardo
        </a>
      </p>

      <section className='grid gap-4 place-items-center'>
        <h2 className='text-xl'>Using the follow technologies:</h2>
        <ul className='flex gap-8 items-center justify-center'>
          <li>
            <Technology name='React' />
          </li>
          <li>
            <Technology name='Vite' />
          </li>
          <li>
            <Technology name='Tailwind' />
          </li>
        </ul>
      </section>
    </section>
  )
}
