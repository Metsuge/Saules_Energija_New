import React from "react";
import {withTranslation} from "react-i18next";

function AnObject({listOfObjectsLT, t, onLoad, number, year, idTotal}) {
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
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation("translation")(AnObject);
