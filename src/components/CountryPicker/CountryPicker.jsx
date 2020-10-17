import React,{useState, useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';
import fetchCountries from '../API/index';
import styles from './CountryPicker.module.css'

const CountryPicker =({handleCountryChange})=>{
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setCountries(await fetchCountries())

        };
        fetchAPI();
    },[]);
    console.log(countries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
             <option value="global">Global</option>
                {countries && countries.map((country, i) => {return<option key={i} value={country}>{country}</option>})}
                
            
            </NativeSelect>
        </FormControl>
        
    )
}
export default CountryPicker;