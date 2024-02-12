import CardInicio from '@/components/CardInicio/CardInicio'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-screen-2xl'>
        {/* ComponenteCarrusel */}
        <div className='w-full flex justify-between flex-wrap gap-4 p-4'>
          <CardInicio link={"/"} title={"Gaming accesories"} >
            <img className='w-full h-full' src='/Amazon_logo.svg' />
          </CardInicio>
          <CardInicio link={"/"} title={"Gaming accesories"} >
            <div className='w-full h-full grid
            grid-cols-2 gap-2'>
              <div className='w-full aspect-square bg-slate-300'></div>
              <div className='w-full aspect-square bg-slate-300'></div>
              <div className='w-full aspect-square bg-slate-300'></div>
              <div className='w-full aspect-square bg-slate-300'></div>
            </div>
          </CardInicio>
          <CardInicio link={"/"} title={"Gaming accesories"} >
            <img className='w-full h-full' src='/Amazon_logo.svg' />
          </CardInicio>
          <CardInicio link={"/"} title={"Gaming accesories"} >
            <img className='w-full h-full' src='/Amazon_logo.svg' />
          </CardInicio>
          <CardInicio link={"/"} title={"Gaming accesories"} >
            <img className='w-full h-full' src='/Amazon_logo.svg' />
          </CardInicio>
        </div>
      </div>
    </div>
  )
}

export default Page