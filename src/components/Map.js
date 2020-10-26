import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    return (
        <MapView
            initialRegion={
                {
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            }
            style={styles.mapStyle}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor='rgba(125,125,255,1.0)'
                fillColor='rgba(125,125,255,0.3)'
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export default Map;