import React, { useState, useEffect } from 'react';
import WrapperMaps from './GoogleMaps/WrapperMaps';
import Marker from './GoogleMaps/Marker';
import { LatLng } from './GoogleMaps/namespace';

const Form = () => {
    const [intervals, setIntervals] = useState<any>()
    const [point, setPoint] = useState<LatLng[]>([])
    const [max, setMax] = useState<number>(6000)

    const intervalMarker = () => {
        let interval: NodeJS.Timeout = setInterval(() => {
            let lat = (Math.random() * (15-12)) + 13
            let lng = (Math.random() * (101-97)) + 97
            point.push({lat: lat, lng: lng})
            setPoint([...point, {lat: lat, lng: lng}])
            console.log(`add Marker: ${point.length}`);
        }, 10)
        setIntervals(interval);
    }

    useEffect(() => {
        return () => {
            setPoint([])
            clearInterval(intervals);
        }
    }, [])

    useEffect(() => {
        if(point.length >= max){
            console.log(`Marker Max: ${point.length} ${max}`);
            clearInterval(intervals)
        }
    }, [point])

    return (
        <div>
            <WrapperMaps>
                {point.length == max && point.map((e) => <Marker position={{ lat: e.lat, lng: e.lng }} />)}
            </WrapperMaps>   
            <div style={{ marginTop: 'calc(2vh)' }}>
                {
                    'Marker Count: '
                }
                <input type="number" onChange={e => setMax(Number(e.target.value))}></input>
                <button onClick={() => intervalMarker()}>re interval</button>
            </div>
        </div>  
    )
}

export default Form;