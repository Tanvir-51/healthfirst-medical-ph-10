import React from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This is booking : {serviceId}</h2>
    </div>
  );
};

export default Booking;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Detail = () => {
//     const { id } = useParams();
//     const [serviceDetails, setServiceDetails] = useState([]);
//     const [single, setSingle] = useState({})
//     useEffect(() => {
//         fetch('/serviceDetails.json')
//             .then(res => res.json())
//             .then(data => setServiceDetails(data.service))
//     }, [])
//     // console.log(id);
//     // console.log(serviceDetails);
//     useEffect(() => {
//         const found = serviceDetails.find(service => service.id === id);
//         setSingle(found);
//     }, [serviceDetails])

//     return (

//         <div className="pt-5">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-8  offset-md-2 offset-sm-2  offset-2">
//                         <div className="card mb-3" >
//                             <div className="row g-0">
//                                 <div className="col-md-4">
//                                     <img src={single?.img} className="img-fluid rounded-start h-100" alt="..." />
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="card-body ">
//                                         <h5 className="card-title text-start fs-2 fw-bolder text-info">{single?.name}</h5>
//                                         <p className="card-text text-start text-success">Price : <small className="text-warning">{single?.price} TK</small></p>
//                                         <p className="card-text text-start text-secondary">{single?.description}</p>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Detail;
