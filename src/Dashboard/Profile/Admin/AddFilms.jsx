import React from "react";


import TextField from "@mui/material/TextField";

const AddFilms = () => {
  return (
    <div className="text-white">
      <h1 className="mx-auto text-xl mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60">
        Add Films
      </h1>
     
 
    
   
      <form className="card-body">
        <div className="grid grid-cols-4 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="email" placeholder="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Year</span>
          </label>
          <input type="email" placeholder="year" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Duration</span>
          </label>
          <input type="email" placeholder="duration" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Poster</span>
          </label>
          <input type="email" placeholder="poster" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="email" placeholder="details" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cast</span>
          </label>
          <input type="email" placeholder="cast" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <input type="email" placeholder="genre" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="email" placeholder="type" className="input input-bordered" required />
        </div>
       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>


   
  );
};

export default AddFilms;
