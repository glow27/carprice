import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './pic';

export default function Bottom() {
  const images = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState(null);

  function popup({ src }) {
    setOpen(true);
    setPicture(src);
  }

  return (
    <>
      {open && <Modal picture={picture} setOpen={setOpen}></Modal>}
      <div className="bottom">
        <img
          src={images[1][11].src}
          onClick={(e) => {
            popup(e.target);
          }}
          alt="app1"
        ></img>
        <img
          src={images[1][12].src}
          onClick={(e) => {
            popup(e.target);
          }}
          alt="app2"
        ></img>
        <img
          src={images[1][15].src}
          onClick={(e) => {
            popup(e.target);
          }}
          alt="app3"
        ></img>
        <img
          src={images[2][11].src}
          onClick={(e) => {
            popup(e.target);
          }}
          alt="app4"
        ></img>
        <img
          src={images[2][12].src}
          onClick={(e) => {
            popup(e.target);
          }}
          alt="app5"
        ></img>
      </div>
    </>
  );
}
