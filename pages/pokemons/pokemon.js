
import Layout from "../../components/Layout";
import Link from 'next/link';
import React from 'react'

export default function pokemon({ poke }) {
    
    let types = 
        poke.types.map((ty, index) => {
            let sep = (index > 0) ? ', ' : '';
            return (<span key={index}>{sep}{ty.type.name}</span>)
        })

    let abilities = 
        poke.abilities.map((ab, index) => {
            let sep = (index > 0) ? ', ' : '';
            return (<span key={index}>{sep}{ab.ability.name}</span>)
        })

    let stats =
        poke.stats.map((st, index) => (
            <p key={index}>{st.stat.name}: {st.base_stat}</p>
        ))

    return (
        <Layout title={poke.name}>
            <div className="flex flex-row flex-wrap justify-center">
                <img className="w-60" src={poke.image} alt={poke.name} />
                <div className="content">
                    <p><span className='mr-2 font-bold'>Name : </span> <span className="capitalize">{poke.name}</span></p>
                    <p><span className='mr-2 font-bold'>Weight : </span>{poke.weight}</p>
                    <p><span className='mr-2 font-bold'>Height : </span>{poke.height}</p>
                    <p><span className='mr-2 font-bold'>Types : </span>{types}</p>
                    <p><span className='mr-2 font-bold'>Abilities : </span>{abilities}</p>
                    <span className='mr-2 font-bold'>Stats : </span><div className="ml-4">{stats}</div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poke = await res.json();
        const paddedId = ('00' + id).slice(-3);
        poke.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { poke }
        }
    } catch (err) {
        console.error(err);
    }
}