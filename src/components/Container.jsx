import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='max-w-350 mx-auto px-4'>
        {children}
    </div>
  )
}