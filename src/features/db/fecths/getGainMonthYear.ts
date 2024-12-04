const token = localStorage.getItem('TOKEN_AUTH');

const getGainsMonthYear = async () => {
    const fetchGains = await fetch("http://localhost:3000/bookings/gainMonthforYear",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }) 
    if(fetchGains.ok){
        const data = await fetchGains.json()
        return data[0]
    }else{
        console.error(`error fetch GainsMonthYear -> ${fetchGains.status}`)
    }
}

export default getGainsMonthYear