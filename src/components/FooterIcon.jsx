export function FooterIcon({ img, name, url }) {
  return (
    <a
      className='focus:outline-none focus:ring focus-visible:ring-accent ring-offset-8 ring-offset-transparent rounded hover:text-accent transition-colors'
      href={`${url}`}
      target='_blank'
    >
      <img src={`${img}`} alt={`${name}`} />
    </a>
  )
}
