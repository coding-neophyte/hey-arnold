export const getCharacters = async () =>{
    const response = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    const data = await response.json()
    return data.map(person => heyArnoldMunge(person))

}


export const getCharacterById = async (id) =>{
    try{
        const response = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
        const data = await response.json()

        return data

    }catch(error){
        throw error;
    }

}


const heyArnoldMunge = (info) =>{
    const munger = {
        id: info._id,
        name: info.name,
        image: info.image,
    }

    return munger;
}
