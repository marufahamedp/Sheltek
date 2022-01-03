import React from 'react';
import useServices from '../../../../hooks/useServices';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const { services, spinner } = useServices()
    return (
        <div className='container'>
              {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
              <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                  services.map(service => <HomeService
                  key={service._id}
                  service={service}
                  ></HomeService>)
              }
            </div>
        </div>
    );
};

export default HomeServices;