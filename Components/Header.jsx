import React from 'react'
import Link from 'next/link'
const Header = (props) => {

  return (
      <>
      <div className='bg-yellow-400 h-16 p-10 text-black text-2xl font-bold flex items-center justify-between'>
        <h2>User</h2>
        <div className='flex gap-5'>
          <Link href="/About">About</Link>
          <Link href="/Careers">Careers</Link>
          <Link href="/Section">Section</Link>
          <Link href="/Logout">Logout</Link>
        </div>
        
      </div>
      
      </>
  )
}

export default Header;
