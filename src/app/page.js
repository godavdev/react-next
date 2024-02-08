import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      Pagina principal
      <Link className='block text-green-700' href={"/profile"}>Ir al perfil</Link>
    </div>
  )
}

export default Page