import { Link, useRouteError } from "react-router-dom";
import React from "react";

//shortcut key -rafce(to create boiler plate component)
const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2> SOmething went wrong!</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
      <Link to="/">
        <button className="">Home 👈</button>
      </Link>
    </div>
  );
};

export default Error;
