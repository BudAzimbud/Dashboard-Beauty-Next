import React from 'react'
import MenuList from './MenuList'
import Image from 'next/image'
import UserImage from '../../asset/svg/UserImage.svg'
import { HumbergerIcon } from '@/asset/config-icons'
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen">
      <aside
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } border border-1 w-[80%] sm:w-64 sm:block overflow-y-auto `}
      >
        <MenuList />
        <div className=' px-4 pb-3 border border-b-0 bg-white flex flex-col  gap-2  '>
          <div className='flex mt-4 gap-2 items-center'>
            <Image src={UserImage} alt="user-image" className='w-[36px]' />
            <div>
              <span className='font-medium text-[14px]'>Savanah N</span>
              <p className='text-[10px] text-gray-400'>Food Quality Manager</p>
            </div>
          </div>
        <button className='bg-red-100 p-2 text-[12px] rounded-md text-red-700'>Logout</button>
        </div>
      </aside>
      <main className="flex-1">
        <div className="sm:hidden">
          <button
            onClick={handleSidebarToggle}
            className="text-indigo-800 rounded-full p-2 rounded-md absolute top-3 right-3 focus:outline-none"
          >
            {isSidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18.293 16.293a1 1 0 01-1.414 0L10 9.414l-6.879 6.88a1 1 0 01-1.414-1.415L8.586 8.999 1.293 1.706A1 1 0 112.707.293L10 7.586l6.293-6.293a1 1 0 111.414 1.415L11.414 9.999l6.879 6.879a1 1 0 010 1.415z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <HumbergerIcon />
            )}
          </button>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}

export default Layout
