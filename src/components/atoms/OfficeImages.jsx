import { useState } from "react";
import { office, mission, vision } from "../../assets/png";

const OfficeImages = () => {
  const [mainImage, setMainImage] = useState(office);
  const handleSubImageClick = (subImage) => {
    setMainImage(subImage);
  };
  return (
    <div>
      <img src={mainImage} alt="" className="office-main-img" />
      <div className="office-img-area">
        <img
          src={office}
          alt=""
          className="office-sub-img"
          onClick={() => handleSubImageClick(office)}
        />
        <img
          src={office}
          alt=""
          className="office-sub-img"
          onClick={() => handleSubImageClick(office)}
        />
        <img
          src={office}
          alt=""
          className="office-sub-img"
          onClick={() => handleSubImageClick(office)}
        />
      </div>
    </div>
  );
};

export default OfficeImages;
