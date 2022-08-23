import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Header({ title }) {

  const router = useRouter();
  const pathrouter = router.pathname.slice(0, router.pathname.lastIndexOf('/'))

  let path;
  if (pathrouter != '') path = pathrouter
  else path = '../'
  
  let goback;
  if (useRouter().pathname !== '/') {
    goback =
      <Link href={path}>
        <a className='absolute w-20 cursor-auto top-6 left-1 y-full'>
          <button type="button" id="home-md-btn" aria-label="home" aria-haspopup="true" aria-controls="home-md" className="inset-0 flex items-center justify-center w-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </a>
      </Link>
  } else goback = ''

  return (
    <div>
      <div className="top-0 flex items-center justify-center w-full p-4 mb-8 space-x-3 text-4xl capitalize bg-white z-5">
        <h1 className='text-center w-100'>{title}</h1>
        {goback}
      </div>
    </div>
  )
}


