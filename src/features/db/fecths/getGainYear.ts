const token = localStorage.getItem('TOKEN_AUTH')

function extractDataFromResponse(response: any): number[] | null {
    // Verifica si el response es un arreglo con la estructura esperada
    if (Array.isArray(response)) {
        return response.map((item) => {
            if (item._buf && item._buf.data) {
                return item._buf.data; // Extrae la propiedad 'data'
            }
            return null; // Retorna null si no hay 'data'
        }).filter(Boolean); // Elimina valores nulos
    }
    return null; // Retorna null si no es un arreglo
}


const gainYear = async () => {
    const fetchGain = await fetch("http://localhost:3000/bookings/gains", {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(fetchGain.ok){
        const dataGain = await fetchGain.json()
        return dataGain[0][0]

    }else{
        console.error(`error fetchGain -> ${fetchGain.status}`);
    }
};

export default gainYear;