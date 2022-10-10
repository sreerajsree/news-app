import React from 'react'
import NavBar from '../components/NavBar'

const contact = () => {
  return (
    <div className="max-w-[600px] mx-auto flex flex-col h-[100vh]">
        <NavBar />
        <div className="my-20">
          <h1 className="font-bold text-3xl text-center">Contact</h1>
        </div>
    </div>
  )
}

export default contact