const axios = require('axios');


const getLugarLatLong = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=463d73568f8e8f9370eed0b8eff05ecd&units=metric`
    });
    const resp = await instance.get();
    if (resp.data === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}