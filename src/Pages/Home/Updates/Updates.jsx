import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Updates = () => {
  const [updates, setUpdates] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/updates`)
      .then((res) => res.json())
      .then((data) => setUpdates(data));
  }, []);

  console.log(updates);
  return (
    <div>
      <div className="">
        <Marquee pauseOnHover autoFill className="border-l-8 border-sky-600 ">
          <div className="flex gap-10 mr-10">
          {updates?.map((update) => (
            <div classname="border-r-4 gap-10" key={update?._id} update={update}>
              <div className="card w-96 h-80 bg-base-600 shadow-xl image-full">
                <figure>
                  <img
                  className="h-80 w-96"
                    src={update?.picture}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mb-6 h-10">{update?.headline}</h2>
                  <p className="h-40 text-gray-300">{update?.details}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-ghost rounded-none bg-gray-700">See More</button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Updates;
