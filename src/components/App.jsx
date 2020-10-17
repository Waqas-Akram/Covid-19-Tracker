import React from 'react';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import styles from './App.module.css';
import CountryPicker from './CountryPicker/CountryPicker';
import {fetchData} from './API/index';
import AcUnitIcon from '@material-ui/icons/AcUnit';
class App extends React.Component {
    state ={
        data:{},
        country:''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    handleCountryChange =async (country)=>{
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        this.setState({data:fetchedData ,country:country});
        //fetchdata
    }
    render(){
        const {data, country} = this.state;
    return(
        <div className={styles.container}>
            <h1 style={{color:"GrayText" , fontSize:"40px"}}>C<AcUnitIcon style={{color:"red", fontSize:"40px" , marginBottom:"-4px"}}/>VID-19 Tracker</h1>
            <Cards data={this.state.data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data}  country={country}/>
            
        </div>
    )
}
}
export default App;