import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewAllPhotos = () => {
  const [PhotoData, ChangeData] = useState([]);

  const fetchedData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos ").then(
      (response) => {
        ChangeData(response.data)
      }
    ).catch()
  }

  useEffect(() => { fetchedData() },[])
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">
          <h4 className="mt-4">View All Photos</h4>
          <div className="col col-12 co-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {PhotoData.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card bg-Warning">
                      <div class="card-header">{value.title}</div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">{value.albumId}</li>
                        <li class="list-group-item">id: {value.id}</li>
                        <li class="list-group-item">url: {value.url}</li>
                        <li class="list-group-item">
                          Thumbnail Url: {value.thumbnailUrl}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPhotos;
