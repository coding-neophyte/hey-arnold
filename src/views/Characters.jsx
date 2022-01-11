import React from 'react'
import { useState, useEffect } from 'react'
import { getCharacters } from '../services/Request'
import ListCharacters from '../components/ListCharacters'



export default function Characters() {
    const [cast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getCast = async () =>{
            const castMate = await getCharacters()
            console.log(castMate)
            setCast(castMate)
            setIsLoading(false)
        }
        getCast()
    }, [])

    return (
        <div>
            {isLoading ? (<h1>Loading...</h1>) : (<ListCharacters characters={cast} />)}

        </div>
    )
}
