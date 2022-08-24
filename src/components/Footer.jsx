import { FooterIcon } from './FooterIcon'

export function Footer() {
  return (
    <footer className='bg-gradient-to-b from-slate-900 to-gray-900 text-gray-200 text-center grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center py-8'>
      <p className='text-xl'>
        Made with ❤️ by <span className='font-bold'>Ricardo Corrales</span>
      </p>
      <section className='grid gap-1'>
        <h3 className='text-lg'>Social media</h3>
        <ul className='grid grid-cols-2 gap-x-4'>
          <li>
            <FooterIcon name='Github' url='https://github.com/CMRicardo' />
          </li>
          <li>
            <FooterIcon name='Twitter' url='https://twitter.com/RichardCM' />
          </li>
        </ul>
      </section>
    </footer>
  )
}
