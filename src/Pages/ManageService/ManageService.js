import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services] = useServices()
    const handleDelete = (id) => {
        const proced = window.confirm('Are you sure?')
        if (proced) {
            const url = `https://gentle-mountain-33302.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div>
            <h2>This is manage service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;