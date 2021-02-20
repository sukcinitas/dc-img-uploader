import React from 'react';

const Loader = () => {
  return (
    <div className="card">
      <header class="card__header">
        <h2 className="card__heading card__heading--left">Uploading...</h2>
      </header>
      <div className="card__loader"></div>
    </div>
  )
}

export default Loader;