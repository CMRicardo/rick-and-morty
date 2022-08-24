import { Github, Twitter } from '../icons'

const SocialMedia = {
  Twitter: <Twitter height={32} width={32} />,
  Github: <Github height={32} width={32} />,
}

export function FooterIcon({ name, url }) {
  return (
    <a
      className='hover:text-gray-400 transition-colors'
      href={url}
      target='_blank'
    >
      {SocialMedia[name]}
    </a>
  )
}
