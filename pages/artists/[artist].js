import Layout from '../../components/Layout';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';
const artpointData = require('../../public/assets/data.json');

export default function artist({ artistData }) {
    
    return (
        <Layout title={artistData.name}>
            <h1 className="my-2 text-2xl">{artistData.name}</h1>
            <div className="mb-2">{parse(artistData.texts[0].body)}</div>
            <div className='flex flex-col '>
                {artistData.artworks.map((artwork, index) => (
                    <div className='h-full p-4 m-2 bg-gray-200 border rounded-md border-gray' key={index}>
                        <h1 className="flex flex-col items-center justify-center text-2xl">Artwork n°{index}</h1>
                        <div>
                            <h2>Slug : {artwork.slug ? artwork.slug : 'unknown'}</h2>
                            <h2>Id: {artwork.id ? artwork.id : 'unknown'}</h2>
                            {artwork.texts[0] ? <h2>Text: {parse(artwork.texts[0].body)}</h2> : ''}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>

    )
}

export async function getStaticPaths() {

    const paths = artpointData.artists.map(data => {
        return {
            params: { artist: data.slug.toString() }
        }
    })
    return { paths, fallback: false }
}


export async function getStaticProps(context) {

    const slug = context.params.artist;
    const artistData = artpointData.artists.find(value => (value.slug === slug));
    return {
        props: { artistData }
    }
}