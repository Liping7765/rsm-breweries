import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./marker-component.css"
import { Typography, Popover, Paper } from '@mui/material';


export default function Maker({name, street, city,
                                state, postal_code, website_url,
                                }) {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        
        setAnchorEl(event.currentTarget);
        
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
        <LocationOnIcon
            className='marker'
            fontSize='large'
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
        </LocationOnIcon>

    
        <Popover
        id="mouse-over-popover"
        sx={{
        pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        >
           
            <Paper variant="outlined" square={true}>
            <Typography sx={{ p: 1 }}>{name}</Typography>
            <Typography fontSize={10} sx={{ p: 1 }}>{street ? street : "N/A"},</Typography>
            <Typography fontSize={10} sx={{ p: 1 }}>{city} {state} {postal_code}</Typography>
            <Typography fontSize={12} sx={{ p: 1 }}>{website_url}</Typography>
            </Paper>
        </Popover>
        </>

    )
}