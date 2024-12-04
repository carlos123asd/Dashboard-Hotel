const token = localStorage.getItem('TOKEN_AUTH')
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