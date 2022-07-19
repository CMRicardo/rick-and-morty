export function PageHeading({ children, id = 'This should be changed' }) {
  return (
    <h2
      className='text-center text-3xl font-bold decoration-4 decoration-accent underline my-4 underline-offset-4'
      id={`#${id}`}
    >
      {children}
    </h2>
  )
}
