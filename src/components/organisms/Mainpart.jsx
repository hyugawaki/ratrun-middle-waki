import "../../assets/main.scss";
import philosophy from "../../assets/philosophy-picture.png";
import vision from "../../assets/vision-picture.png";

const FirstContent = () => {
  return (
    <p className="first-content-caption">
      タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入
      ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイ
      タイトルが入ります。タイトルが入ります。タイトルが入ります。トルが入ります。
    </p>
  );
};

const SecondContent = () => {
  return (
    <div className="philosophy">
      <div className="philosophy--box">
        <img src={philosophy} alt="" className="philosophy--picture" />
        <div className="philosophy--caption first">
          <h5>テキストが入ります。テキストが入ります。</h5>
          <p>
            テキストが入ります。テキストが入ります。
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </div>
      <div className="philosophy--box">
        <div className="philosophy--caption second">
          <h5>テキストが入ります。テキストが入ります。</h5>
          <p>
            テキストが入ります。テキストが入ります。
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <img src={philosophy} alt="" className="philosophy--picture" />
      </div>
      <div className="philosophy--box">
        <div>
          <img
            src={philosophy}
            alt=""
            className="philosophy--another-picture"
          />
          <div className="test">
            <h5>テキストが入ります。テキストが入ります。</h5>
            <p>
              テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
          </div>
        </div>
        <div>
          <img
            src={philosophy}
            alt=""
            className="philosophy--another-picture"
          />
          <div className="test">
            <h5>テキストが入ります。テキストが入ります。</h5>
            <p>
              テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
            <table>
              <tr>
                <th>竣工年：</th> <td>2017年</td>
              </tr>
              <tr>
                <th>計画地：</th> <td>愛知県名古屋市</td>
              </tr>
              <tr>
                <th>構造・面積：</th> <td>木造2階建　96㎡</td>
              </tr>
              <tr>
                <th>工期：</th> <td>2017年9月〜11月</td>
              </tr>
              <tr>
                <th>業務内容：</th>{" "}
                <td>インテリアデザイン、施工マネジメントイOXOXOXOXOXOOX</td>
              </tr>
              <tr>
                <th>クライアント：</th> <td>個人</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdContent = () => {
  return (
    <div>
      <img src={vision} alt="" />
      <p>
        昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
      </p>
      <button>詳しく見る</button>
    </div>
  );
};

const Mainpart = () => {
  // const titles = ["事業目的　VISION","事業使命　MISSION","情報技術とデザインと思想","デザインの概要","代表デザイン事例","バーチャルオフィス","未来の展望"]
  const sections = [
    {
      title: "メインタイトルが",
      content: <FirstContent />,
    },
    {
      title: "経営理念 PHILOSOPHY",
      content: <SecondContent />,
    },
    {
      title: "事業目的　VISION",
      content: <ThirdContent />,
    },
  ];

  return (
    <div>
      {sections.map((section, index) => {
        return (
          <div key={index} className="section">
            <h2 className="section-title">{section.title}</h2>
            {section.content}
          </div>
        );
      })}
    </div>
  );
};

export default Mainpart;
