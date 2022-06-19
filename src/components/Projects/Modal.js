import React from "react";
import { Link } from "react-router-dom";


const Modal = ({ listOfBiggerPics, number, t, year, idTotal }) => {
  //get the index of the object, not the id
  const index = listOfBiggerPics.findIndex(object => {
    return object.idTotal === idTotal;
  });
  return (
    <>
      <Link
        key={listOfBiggerPics[index].id}
        to={`/object/${listOfBiggerPics[index].id}`}
      >
        <button className="button">Full window</button>
      </Link>
      <div className=".img-section-projects">
        <p className="intro-about">
        {t(`test.${year}.id${number}.title`)}</p>
        <img className='modal-img' src={listOfBiggerPics[index].src}></img>

        <div className='modal-div'>
          {listOfBiggerPics[index].pics.map((picture) => {
            return <img className='modal-img' src={picture}></img>;
          })}
        </div>
      </div>
    </>
  );
};

export default Modal;
