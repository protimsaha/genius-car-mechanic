import useServices from '../../../hooks/useServices';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices()

    return (
        <div id='services'>
            <PageTitle title='Services'></PageTitle>
            <h1 className='service-title'>Services</h1>

            <div className='container1'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;