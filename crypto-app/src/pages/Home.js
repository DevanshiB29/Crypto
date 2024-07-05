import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CrptoProvider } from '../context/CryptoContext'

const Home = () => {
  return (
    <CrptoProvider>
      <main className=" w-full h-full flex flex-col first-letter:
     content-center items-center relative text-white font-nunito">
      <div className='w-screen h-screen bg-gray-300 fixed -z-10'/>
    <Logo/>
    <Navigation/>

      <Outlet/>
    </main>
    </CrptoProvider>
    
  )
}

export default Home
