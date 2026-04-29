import React from "react"

const Container = ({children}: {children: React.ReactNode} ) => {
  return (
    <div className='h-screen flex justify-center items-center w-[80%] mx-auto'>
        {children}
    </div>
  )
}

export default Container