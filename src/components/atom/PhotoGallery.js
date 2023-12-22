import React, { useState } from "react";
import { ProductImage } from "../utils/data";

const PhotoGallery = ({ bgimage, setBgimage }) => {
  const ChangeThumbnail = (id) => {
    console.log(id);
    const newpeople = ProductImage.filter((item) => item.id === id);
    console.log(newpeople);
    setBgimage(newpeople);
  };
  const BgImage = () => {
    return bgimage.map(({ imageBG, id }) => {
      return (
        <div>
          <img src={imageBG} key={id} alt="bg-img" className="img-BG" />
        </div>
      );
    });
  };

  const MobileImg = () => {
    const [index, setIndex] = useState(0);
    const { imageBG, id } = ProductImage[index];

    const checkNumber = (number) => {
      if (number > ProductImage.length - 1) {
        return 0;
      }
      if (number < 0) {
        return ProductImage.length - 1;
      }
      return number;
    };
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    };
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };
    return (
      <section className="mobileImg-hero">
        <img
          onClick={prevPerson}
          className="left-arrow"
          src="/images/chevron-left.png"
        />
        <img key={id} src={imageBG} alt="big-img" className="Mbig-img" />
        <img
          onClick={nextPerson}
          className="right-arrow"
          src="/images/chevron-right.png"
        />
      </section>
    );
  };
  return (
    <>
      <section className="desktop">
        <BgImage />
        <div className="desktop-flex">
          {ProductImage.map(({ id, image }) => {
            return (
              <>
                <img
                  key={id}
                  src={image}
                  alt="small-img"
                  className="smallImg"
                  onClick={() => ChangeThumbnail(id)}
                />
              </>
            );
          })}
        </div>
      </section>
      <section className="mobile">
        <MobileImg />
      </section>
    </>
  );
};

export default PhotoGallery;
