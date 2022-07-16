export function Footer() {
  return (
    <footer className='bg-gradient-to-b from-slate-900 to-indigo-900 text-gray-200 text-center grid grid-col-1 gap-4 place-items-center py-8'>
      <p className='text-2xl'>Made with ❤️ by Ricardo Corrales</p>
      <section>
        <h3 className='text-xl'>Social media</h3>
        <ul className='grid grid-cols-2 gap-4'>
          <li>
            <a
              className='focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent p-4 rounded hover:bg-gray-500/40 transition-colors'
              href='https://github.com/CMRicardo'
              target='_blank'
            >
              <img src='/images/TwitterIcon.svg' alt='Twitter' />
            </a>
          </li>
          <li>
            <a
              className='focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent p-4 rounded hover:bg-gray-500/40 transition-colors'
              href='https://twitter.com/RichardCM'
              target='_blank'
            >
              <img src='/images/GithubIcon.svg' alt='Github' />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
