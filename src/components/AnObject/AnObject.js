import React from "react";
import { withTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function AnObject({ listOfObjectsLT, t, onLoad, number, year, idTotal }) {
  //id of the correct object
  // let { id } = useParams();
  console.log(number);
  const index = listOfObjectsLT.findIndex((object) => {
    return object.idTotal === idTotal;
  });
  let s = listOfObjectsLT[index].src;

  let listOfAdditionalPics = listOfObjectsLT[index].pics;

  return (
    <>
      <div onLoad={onLoad()}>
        <div className="pagrindinis-div">
          <p className="intro-about">{t(`test.${year}.id${number}.title`)}</p>
          <div className="object-div">
            <div className="img-object-div">
              <img alt="img" className="object-img" src={s} width="40%" />
            </div>
            {listOfAdditionalPics.map((pic) => {
              return (
                <div className="img-object-div">
                  <img alt="img" className="object-img" src={pic} width="40%" />
                </div>
              );
            })}

            {/* <p className="object-text">
              {t(`listOfObjectsLT.id${listOfAdditionalPics[id].id}.text`)}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation("translation")(AnObject);
