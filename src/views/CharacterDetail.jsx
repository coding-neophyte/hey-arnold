import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCharacterById } from '../services/Request'


export default function CharacterDetail() {
    const [isLoading, setIsLoading] = useState(true)
    const [castMember, setCastMember] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const characterDetails = async () =>{
            const singleCastMember = await getCharacterById(id)
            console.log(singleCastMember)
            setCastMember(singleCastMember)
            setIsLoading(false)

        }
        characterDetails();
    }, [])

    return (
        <div>
            <h1>Detail Page</h1>
            <Link to='/characters'>Back to Characters</Link>
           {isLoading ? (<h1>Loading...</h1>) : (<>
           <h3>{castMember.name}</h3>
           <img src={castMember.image} alt={castMember.name} /> </>
           )}
        </div>
    )
}
