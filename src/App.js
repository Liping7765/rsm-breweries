import './App.css';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import GoogleMap from './components/map/map-component';
import BreweryList from './components/brewery/brewery-container';
import CustomizedAppBar from './components/bar/appbar-component';
import {useDispatch } from 'react-redux';
import { getBreweries } from './actions/brewery';


function App() {

  const [currentState, setCurrentState] = useState("ALL");
  

  // fetch data of breweries from api 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreweries());
  }, [dispatch])


  return (
    <div className="App">
      
      <Grid container>
        <CustomizedAppBar setCurrentState={setCurrentState}></CustomizedAppBar>
      </Grid>

      <Grid container>
        <Grid item xs={9}>
          <GoogleMap currentState={currentState} ></GoogleMap>
        </Grid>

        <Grid item xs={3}>
          <BreweryList currentState={currentState}></BreweryList>
        </Grid>
      </Grid>
      <div>{currentState}</div>
    </div>
  );
}

export default App;
