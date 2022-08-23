import Layout from '../components/Layout'
import Link from 'next/link';


export default function Home({ data }) {
  return (
    <Layout title="Artpoint test" back="">
      <div className='flex flex-col'>
        <div className=''>
          <Link href={`/artists`}>
            <a className='flex flex-col items-center justify-center h-full p-4 m-2 text-lg capitalize bg-gray-200 border rounded-md border-gray hover:scale-105 hover:bg-gray-100'>
              <p><span className='mr-2 font-bold'>Artists </span></p>
            </a>
          </Link>
          <Link href={`/pokemons`}>
            <a className='flex flex-col items-center justify-center h-full p-4 m-2 text-lg capitalize bg-gray-200 border rounded-md border-gray hover:scale-105 hover:bg-gray-100'>
              <p><span className='mr-2 font-bold'>Pokemons </span></p>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

