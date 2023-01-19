import React from 'react';
import "./marker-component.css"
import { Typography, Popover, Paper } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import './marker-component.css'


export default function MarkerPopup({name, street, city,
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
            <CoffeeIcon
                className='marke selected-icon'
                fontSize='large'
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
            </CoffeeIcon>


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