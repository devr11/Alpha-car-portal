import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='max-w-[1400px] py-xl mx-auto px-4'>
        {children}
    </div>
  )
}