import { useState, useEffect } from 'react';

import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            );
            setSubscriber(sub);
            if (!granted) {
                throw new Error('Location Permission not granted');
            }
        } catch (e) {
            setErr(e)

        }
    }
    useEffect(() => {
        if (shouldTrack) {

            startWatching();
        } else {
            subscriber.remove();
            setSubscriber(null);

        }
    }, [shouldTrack])


    return [err];
}