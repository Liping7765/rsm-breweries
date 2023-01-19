import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import BreweryDetail from './brewery-detail';
import { useState } from "react";
import { Pagination } from '@mui/material';
import { useSelector} from 'react-redux';



const getByPage = (data, page, pageSize) => {
    let start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize)
}



export default function BreweryContainer({ currentState }) {

    const data = useSelector((state)=> {
        if(currentState === "ALL") {
          return state.brewery
        }
        return state.brewery.filter((bre)=> bre.state === currentState)
    })


    const [page, setPage] = useState(1);

    //return page number to 1 after updating selected state 
    React.useEffect(()=>{
        setPage(1);
    },[data])


    // divide data into different pages 
    const pageSize = 6;
    const numOfPage = Math.ceil(data.length / pageSize);
    const paginated_data = getByPage(data, page, pageSize);


    function handlePaginationOnClick(event, value) {
        setPage(value);
    }




    return (
        <div style={{minHeight: '65vh', maxHeight: '100vh', height: '65vh', width: '100%' }}>
        <List
            sx={{ 
                width: '100%', 
                minWidth: 120, 
                bgcolor: 'background.paper',
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Breweries in this State...
                </ListSubheader>
            }
        >
            {paginated_data.map((brewery)=>{
                return <BreweryDetail  key={brewery.id} {...brewery}></BreweryDetail>
            })}
            

            <Pagination key="pagination-bar" count={numOfPage} color="primary" onChange={handlePaginationOnClick} />
            
        </List>
        </div>
    );
}