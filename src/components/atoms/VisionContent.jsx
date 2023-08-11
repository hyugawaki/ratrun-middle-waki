function VisionContent({ image, text }) {
  return (
      <div className="vision-content">
        <img src={image} alt="" />
        <p>{text}</p>
        <button>詳しく見る</button>
      </div>
  );
}

export default VisionContent;
