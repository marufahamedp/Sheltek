import React, { useEffect, useState } from 'react';

const Order = ({order}) => {
    const {username, email, projectname, orderStatus, image, price, _id} = order;
    console.log(order);
    const handelDelete = id => {
        const url = `https://lit-temple-88055.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully deleted');
                    }
                })
    }
    return (
        <div class="col">
            <div class="card mb-3 text-dark">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={`data:image/png;base64,${image}`}  class="img-fluid rounded-start w-100 h-100" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2>Order Details</h2>
                            <h5 class="card-title">{projectname}</h5>
                            <p className='p-0 m-0'>Price: {price} $</p>
                            <p className='p-0 m-0'>Order By: {email}</p>
                            <p class="card-text">Order Status : <span className='text-danger'>{orderStatus}</span></p>
                            <button onClick={() => handelDelete(_id)} className='codepickjs-btn'>Cancle Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;