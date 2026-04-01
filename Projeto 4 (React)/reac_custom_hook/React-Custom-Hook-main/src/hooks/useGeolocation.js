import { useState, useEffect } from "react";

export function useGeolocation() {
    const [currentLocation, setCurrentLocation] = useState({});
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentLocation(position.coords);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    return currentLocation;
}