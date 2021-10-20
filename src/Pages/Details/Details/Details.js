import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch("/serviceDetails.json") //fetching data from json file.
      .then((res) => res.json())
      .then((data) => setServiceDetails(data.service));
  }, []);

  useEffect(() => {
    const found = serviceDetails.find((services) => services.id === serviceId); // for searching the information for implementing
    setSingleService(found);
    console.log(found);
  }, [serviceDetails]);
  return (
    <div>
      <div className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-8  offset-md-2 offset-sm-2  offset-2">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={singleService?.image}
                      className="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="card-title text-start fs-2 fw-bolder ">
                        Name: {singleService?.name}
                      </h5>

                      <p className="card-text text-start ">
                        {singleService?.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
