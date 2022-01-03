import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = ({service}) => {
    const {name, details, price, image, technology, _id} = service;
    return (
        <div className="col">
        <Link to={`/services/${_id}`} className='text-decoration-none text-dark'>
        <div className="card h-100">
            <img src={`data:image/png;base64,${image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h5 className="card-title">Starts only at {price}$</h5>
                <h6 className="card-title">Technology : {technology}</h6>
                <small className="card-text">{details}</small>
            </div>
        </div>
        </Link>
    </div>
    );
};

export default HomeService;