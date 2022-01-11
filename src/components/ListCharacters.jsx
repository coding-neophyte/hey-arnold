import React from 'react'
import Character from './Character'
import { Link } from 'react-router-dom'


export default function ListCharacters({ characters }) {

    return (
        <div>
            <ul>
                {characters.map((character) => { return (<li key={character.id}><Link to={`/characters/${character.id}`}><Character name={character.name} image={character.image}/></Link> </li>)})}
            </ul>
        </div>
    )
}
