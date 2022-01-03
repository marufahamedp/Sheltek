import React, { useEffect, useState } from 'react';
import useServiceDetails from '../../../hooks/useServiceDetails';
import Footer from '../Footer/Footer/Footer';
import NavBar from '../Header/NavBar/NavBar';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const ServiceDetails = () => {
  const { serviceDetails, spinner } = useServiceDetails();
  const { name, details, price, image, technology, _id } = serviceDetails;

  const { user } = useAuth()
  const [date, setDate] = useState(new Date());
  const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDate = day + '-' + month + '-' + year;
  const [defaultValue, setDefaultValue] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    fetch('https://lit-temple-88055.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Order Done')
          reset()
        }

      });
  };
  useEffect(() => {
    setDefaultValue({ email: user.email, photo: user.photoURL, id: _id, orderStatus: 'Pending', price: price, image: image, orderDate: currentDate })
  }, [_id]);
  useEffect(() => {
    reset(defaultValue)
  }, [defaultValue]);
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mt-4">
        {
          spinner && <div class="d-flex justify-content-center">
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        <div className="row">
          <div className="col-lg-8">
            <h1 className="text-center">{name}</h1>
            <div className="text-center my-3">
              <img src={`data:image/png;base64,${image}`} alt="" />
            </div>
            <article className='mt-5'>
              <h3>{name}</h3>
              <h4>Minimum Price : {price}$</h4>
              <p>used Technology : {technology}</p>
              <p> {details}</p>
            </article>
          </div>
          <div className="col-lg-4">
            <h1 className='text-center'>Order This Project</h1>
            <div className="a">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name :</label>
                <input defaultValue={user.displayName} {...register("username")} type="text" />
                <label htmlFor="name">Email :</label>
                <input defaultValue={user.email} {...register("email")} type="email" />
                <label htmlFor="name">Project Name :</label>
                <input defaultValue={name} {...register("projectname")} type="text" />

                <div className="text-center">
                  <button className='codepickjs-btn w-100' type='submit'>Order Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;