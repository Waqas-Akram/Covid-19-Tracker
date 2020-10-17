import React from 'react';
import {Card, CardContent ,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
function Cards({data:{confirmed, recovered ,deaths,lastUpdate}}){
    if(!confirmed){
        return "Loading......."
    }
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom> <h3 style={{color:"rgb(208, 21, 237)",textAlign:"center" ,fontSize:"40px" ,borderBottom:"5px dotted rgb(208, 21, 237) "}}>Infected</h3></Typography>
                       <Typography varient="h5">
                          <h4 style={{color:"blue",textAlign:"center" ,fontSize:"30px"}}> <CountUp start={0} end={confirmed.value} duration={2.5} separator=','
                           /></h4>
                       </Typography>
    <Typography color="textSecondary"><h6 style={{color:"#C9235E",textAlign:"center" ,fontSize:"20px"}}>{new Date(lastUpdate).toLocaleDateString()}</h6></Typography>
                       
                   </CardContent>

               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom> <h3 style={{color:"rgb(208, 21, 237)",textAlign:"center" ,fontSize:"40px",borderBottom:"5px dotted rgb(208, 21, 237) "}}>Recovered</h3></Typography>
                       <Typography varient="h5">
                          <h4 style={{color:"green",textAlign:"center" ,fontSize:"30px"}}> <CountUp start={0} end={recovered.value} duration={2.5} separator=','
                           /></h4>
                       </Typography>
                       <Typography color="textSecondary"><h6 style={{color:"#C9235E",textAlign:"center" ,fontSize:"20px"}}>{new Date(lastUpdate).toLocaleDateString()}</h6></Typography>
                       
                   </CardContent>

               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom> <h3 style={{color:"rgb(208, 21, 237)",textAlign:"center" ,fontSize:"40px",borderBottom:"5px dotted rgb(208, 21, 237) "}}>Deaths</h3></Typography>
                       <Typography varient="h5">
                         <h4 style={{color:"red",textAlign:"center" ,fontSize:"30px"}}>  <CountUp start={0} end={deaths.value} duration={2.5} separator=','
                           /></h4>
                       </Typography>
                        <Typography color="textSecondary"><h6 style={{color:"#C9235E",textAlign:"center" ,fontSize:"20px"}}>{new Date(lastUpdate).toLocaleDateString()}</h6></Typography>
                   </CardContent>

               </Grid>

           </Grid>

       </div>
    )
}
export default Cards;