import React from 'react';
import useServices from '../../../../hooks/useServices';
import NavBar from '../../../Shared/Header/NavBar/NavBar';
import Service from '../Service/Service';

const Services = () => {
    const { services, spinner } = useServices()
    return (
        <div>
            <NavBar></NavBar>
             <div className="mt-5 container">
             {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
              <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                  services.map(service => <Service
                  key={service._id}
                  service={service}
                  ></Service>)
              }
            </div>
             </div>
        </div>
    );
};

export default Services;