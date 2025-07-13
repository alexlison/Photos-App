import React from 'react'
import NavBar from './NavBar';

const DeletePhotos = () => {
  return (
    <div>
        <NavBar />
        <div className="container">
         <h4 className="mt-4">Delete photos</h4>

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 cl-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <lable className="form-label">Photo Title</lable>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 cl-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePhotos;