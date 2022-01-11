import React from 'react'

export default function Character({ name , image  }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />


        </div>
    )
}
