import React from 'react';

const Loader = () => {
  return (
    <div className="card">
      <header className="card__header">
        <h2 className="card__heading card__heading--left">Uploading...</h2>
      </header>
      <div className="card__loader" role="progressbar"></div>
    </div>
  )
}

export default Loader;