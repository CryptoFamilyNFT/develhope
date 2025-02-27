import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);
    const [_error, setError] = useState(null);
    const [_loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setLoading(false);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return { location, getCurrentLocation, _error, _loading };
};

export default useCurrentLocation;