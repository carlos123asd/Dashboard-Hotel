const token = localStorage.getItem('TOKEN_AUTH')

const fetchGetRoom = async (id:Number) => {
    const room = await fetch(`https://eympm1p3o7.execute-api.eu-west-3.amazonaws.com/production/rooms/room/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(room.ok){
        const roomjson = await room.json();
        return roomjson[0][0]
    }
}

export default fetchGetRoom