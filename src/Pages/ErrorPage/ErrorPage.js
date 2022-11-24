import React from "react";
import { useRouteError } from "react-router-dom";
import Errors from '../../assets/98488-bot-error-404.gif';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={Errors} alt="" />
        <br />
        {error && (
          <div>
            <p className="text-red-500">{error.statusText || error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
