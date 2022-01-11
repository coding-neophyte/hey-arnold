import React from 'react'
import { useState, useEffect } from 'react'
import { getCharacters } from '../services/Request'
import ListCharacters from '../components/ListCharacters'



export default function Characters() {
    const [cast, setCast] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getCast = async () =>{
            const castMate = await getCharacters(page)
            console.log(castMate)
            setCast(castMate)
            setIsLoading(false)
        }
        getCast()
    }, [page])

    return (
        <div>
            {page !== 1 ? <button onClick={() => setPage(page - 1)}>Prev Page</button> : null}
            {page !== 11 ? <button onClick={() => setPage(page + 1)}>Next Page</button> : null}
            {isLoading ? (<h1>Loading...</h1>) : (<ListCharacters characters={cast} />)}

        </div>
    )
}
