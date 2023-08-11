function DesignContent({ image, number, title, text }) {
  return (
    <div className="info-design-content">
      <img src={image} alt="" />
      <div className="info-design-text">
        <h3>{number}{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default DesignContent;
