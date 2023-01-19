import * as React from 'react';

import {
    ListItem, Link, ListItemText, ListItemButton,
    List, Divider, Collapse,  
        } from '@mui/material';

import { ExpandMore, ExpandLess } from '@mui/icons-material';

import ClassIcon from '@mui/icons-material/Class';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { useDispatch } from 'react-redux'
import { getSelection } from '../../actions/selection';
import { CENTER } from '../../constants/locationData';



export default function BreweryDetail(props) { 

    const {id, name, street, city, state, postal_code, brewery_type, website_url} = props; 
    const [open, setOpen] = React.useState(true);
    const {latitude, longitude} = props;
    const dispatch = useDispatch();

    const handleOpen= () => {
        setOpen(false);
        dispatch(getSelection({id, latitude, longitude}));
    };

    const handleClose = () => {
        setOpen(true);
        dispatch(getSelection({id:"", latitude: CENTER.latitude, longitude: CENTER.longitude}));
    };


    return (
        <div>
            <ListItemButton onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                <ListItemText 
                sx={{
                    color:{xs:"blue", md:"black"},
                }}
                primary={name}
                />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

            <Divider />
            <Collapse   in={!open} 
                        timeout="auto" 
                        unmountOnExit 
                        onMouseEnter={handleOpen} 
                        onMouseLeave={handleClose} 
                    >
                    <List component='div'
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                    >
                        <ListItem>
                            <LocationOnIcon></LocationOnIcon>
                            <ListItemText>{`${street ? street : "N/A" }, ${city} ${state} ${postal_code}`}</ListItemText>
                        </ListItem>


                    <ListItem>
                        <ClassIcon></ClassIcon>
                        <ListItemText> TYPE: {brewery_type.toUpperCase()}</ListItemText>
                    </ListItem>

                        <ListItem>
                            <LinkIcon></LinkIcon>
                            <ListItemText ><Link target="_blank" href={website_url}> {website_url}</Link></ListItemText>
                        </ListItem>

                    </List>
                </Collapse>
                <Divider />
        </div>
    )
}