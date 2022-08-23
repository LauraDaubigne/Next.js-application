import Layout from '../../components/Layout'
import Link from 'next/link';

export default function Home({ data }) {
    
    return (
        <Layout title="Artists">
            <div className='flex flex-col'>
                {data.map((artist, index) => (
                    <div className='' key={index}>
                        <Link href={`/artists/${artist.slug}`}>
                            <a className='flex flex-col items-center justify-center h-full p-4 m-2 text-lg capitalize bg-gray-200 border rounded-md border-gray hover:scale-105 hover:bg-gray-100'>
                                <p><span className='mr-2 font-bold'>{artist.name} </span></p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {

    const artpointData = require('../../public/assets/data.json');
    const data = artpointData.artists;
    data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return {
        props: { data }
    }
}
