import axios from 'axios';
const url ="https://covid19.mathdro.id/api";

export const fetchData = async (country)=>{
    let changeabaleUrl =url;
    if(country){
        changeabaleUrl = `${url}/countries/${country}`;
    }
    try {
        const {data} = await axios.get(changeabaleUrl);
        const modifiedData ={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate

        }
        return modifiedData;
    } catch (error) {
        if(error){
            console.log(error);
        }
        
    }
}
export const fetchDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            data:dailyData.reportDate
        }));
        console.log(data);
         return modifiedData;
        
    } catch (error) {
        
    }
}
export const fetchCountries = async ()=>{
    try{
        const {data :{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) =>country.name)
    }
    catch(error){
        return error;

    }
}
export default fetchCountries