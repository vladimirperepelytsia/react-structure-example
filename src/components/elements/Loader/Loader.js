import React from 'react';
import loader from '../../../assets/images/loader.svg';

export default function Loader() {
  return (
    <div>
      <img
        src={loader}
        className="App-loader"
        alt="loader"
      />
    </div>
  );
}
