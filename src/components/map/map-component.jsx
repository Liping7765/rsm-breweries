import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker-component'
import { useSelector } from 'react-redux'
import { ZOOM, CENTER } from "../../constants/locationData";
import MarkerPop from '../marker/marker-popup'
import "./map-component.css"



export default function GoogleMap() {

    const data = useSelector((state) => state.brewery);
    const selection = useSelector((state) => state.selection);


    const defaultProps = {
        center: {
            lng:  CENTER.longitude,
            lat:  CENTER.latitude,
        },
        zoom: ZOOM
    };


    return (
        // informing to load data
        !data ? <div>loading data...</div> :
        <div className="google-map-container">
            <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                
            >

                {data.map((brewery)=>{

                    if (brewery.id === selection.id) {
                        return (
                            <MarkerPop
                                    key={brewery.id}
                                    lat={brewery.latitude}
                                    lng={brewery.longitude}
                                    {...brewery}
                                >
                            </MarkerPop>)

                    }
                    
                    return (<Marker
                        key={brewery.id}
                        lat={brewery.latitude}
                        lng={brewery.longitude}
                        {...brewery}
                        className="google-map-marker"
                    />)
                })}
                
            </GoogleMapReact>
        </div>
    );
}