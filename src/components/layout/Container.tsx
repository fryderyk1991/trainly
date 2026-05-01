import React from "react"

const Container = ({children}: {children: React.ReactNode} ) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
        {children}
    </div>
  )
}

export default Container