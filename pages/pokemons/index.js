import Layout from '../../components/Layout'
import { useState } from 'react'
import Link from 'next/link';

export default function Home({ pokemon }) {

    const [searchTerm, setSearchTerm] = useState("");
    let items =
        pokemon.map((poke, index) => {
            if (poke.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return (
                    <div className='w-3/12 aspect-square hover:scale-105' key={index}>
                        <Link href={`/pokemons/pokemon?id=${index + 1}`}>
                            <a className='flex flex-col items-center justify-center h-full p-4 m-2 text-base capitalize bg-gray-200 border rounded-md hover:bg-gray-100 border-gray'>
                                <img
                                    className="w-20 h-20 mr-3"
                                    src={poke.image}
                                    alt={poke.name}
                                />
                                <p><span className='mr-2 font-bold'>{index + 1}. {poke.name} </span></p>
                            </a>
                        </Link>
                    </div>
                )
            }
        })

    return (
        <Layout title="Pokemons">
            <input className="absolute px-3 py-2 text-base text-gray-700 border rounded shadow top-6 right-2 w-50 h-7" type="text" placeholder="Search.."
                onChange={(event) => { setSearchTerm(event.target.value); }}
            />
            <div className='flex flex-row flex-wrap '>
                {items}
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251')
        const { results } = await res.json();
        const pokemon = results.map((result, index) => {
            const paddedId = ("00" + (index + 1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
            return { ...result, image };
        });
        return {
            props: { pokemon }
        }
    } catch (err) {
        console.error(err);
    }
}
