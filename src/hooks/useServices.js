import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://gentle-mountain-33302.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services]
};

export default useServices;