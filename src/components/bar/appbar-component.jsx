import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { InputLabel, Stack, Typography, Grid, MenuItem, Select, Switch, FormControlLabel } from '@mui/material';
import { US_STATES } from '../../constants/us_state';
import { useDispatch, useSelector } from 'react-redux';
import { getBreweriesFromNewApi, getBreweries } from '../../actions/brewery';



const displayAllState = (options, existed_states) => {
    
    existed_states.add("ALL");
    // only provide options of existed states from the api fetching 
    return options.map((option)=>{
        if(existed_states.has(option.name)){

            return (<MenuItem key={option.code} value={option.name}>
                    {option.code}
                    </MenuItem>)
        }
        return null;
    })
}




export default function CustomizedAppBar({ setCurrentState}) {

    const [selected, setSelected] = React.useState("ALL");
   
    // update selected state to reflect only breweries in that state.
    const handleChange = (event) => {
        setSelected(event.target.value);
        setCurrentState(event.target.value);
    };

    // in order to show only available states, we need to know available states
    const data = useSelector((state)=> state.brewery);
    // get a set of names of available states
    const existed_states = new Set(data.map((bre)=>bre.state));


    // use customizedApi to decide which api to fetch 
    const [customizedApi, setCustomizedApi] = React.useState(false);
    const dispatch = useDispatch();
    const updateApiSource = ()=>{
        setCustomizedApi(!customizedApi);
    }

    const chooseApi = (customizedApi) => {

        if (customizedApi) {
            // fire an action to fetch from my customized api 
            dispatch(getBreweriesFromNewApi());
            return;
        }

        // fetch from breweries api if false
        dispatch(getBreweries());
    }


    // set up a hook to fetch from different apis when triggerred 
    React.useEffect(()=> {
        chooseApi(customizedApi);
    },[customizedApi])
    


    return (
        <AppBar position="static">
            <Grid container justifyContent="space-between" >
                <Grid item xs={0} md={4}>
                    <Stack>
                        <Typography
                            variant="h4"
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 400,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            RSM - Liping Ma

                        </Typography>
                        <FormControlLabel 
                            control={<Switch 
                                color="default" 
                                onChange={updateApiSource}
                                />} 
                        label="Fetch from Liping's API" />
                    </Stack>

                    
                </Grid>
                    
                <Grid item xs={12} md={4}>
                    <InputLabel id="us-states-select-label" 
                                sx={{
                                    color: 'whitesmoke',
                                    fontFamily: 'monospace',
                                    fontWeight: 400,
                                    letterSpacing: '.1rem',
                                }} 
                    >US STATE</InputLabel>
                    <Select
                        value={selected}
                        variant="filled"
                        sx={{ 
                            display: 'flex',
                            maxHeight: 50,
                            fontFamily: 'monospace',
                            minWidth: 120,
                            color: 'whitesmoke',
                        }}   
                        labelId="us-states-select-label"
                        onChange={handleChange}
                        
                    >

                        {displayAllState(US_STATES, existed_states)}
                    </Select>
                </Grid>
            </Grid>
        </AppBar>
    )
}
