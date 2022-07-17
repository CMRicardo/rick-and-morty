import { FooterIcon } from './FooterIcon'

export function Footer() {
  return (
    <footer className='bg-gradient-to-b from-slate-900 to-gray-900 text-gray-200 text-center grid grid-col-1 gap-4 place-items-center py-8'>
      <p className='text-2xl'>
        Made with ❤️ by <span className='font-bold'>Ricardo Corrales</span>
      </p>
      <section>
        <h3 className='text-xl'>Social media</h3>
        <ul className='grid grid-cols-2 gap-x-4 mt-4'>
          <li>
            <FooterIcon
              url={'https://twitter.com/RichardCM'}
              name='Twitter'
              img='/images/TwitterIcon.svg'
            />
          </li>
          <li>
            <FooterIcon
              url='https://github.com/CMRicardo'
              name='Github'
              img='/images/GithubIcon.svg'
            />
          </li>
        </ul>
      </section>
    </footer>
  )
}
