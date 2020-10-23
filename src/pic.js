import React from 'react';

export default function Modal({ picture, setOpen }) {
  return (
    <div className="popup-pic" onClick={() => setOpen(false)}>
      <img src={picture} alt="app"></img>
    </div>
  );
}
