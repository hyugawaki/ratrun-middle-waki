import "../../assets/main.scss";
import philosophy from "../../assets/philosophy-picture.png";
import vision from "../../assets/vision-picture.png";
import mission from "../../assets/mission-picture.png";
import office from "../../assets/office-picture.png";
import Accordion from "./Accordion";

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
        <div className="philosophy--caption word-break">
          <h5>テキストが入ります。テキストが入ります。</h5>
          <p>
            テキストが入ります。テキストが入ります。
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </div>
      <div className="philosophy--box">
        <div className="philosophy--caption">
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
          <div className="philosophy--caption">
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
          <div className="philosophy--caption">
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
    <div className="vision">
      <div className="vision-content">
        <img src={vision} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
        <button>詳しく見る</button>
      </div>
      <div className="vision-content">
        <img src={vision} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
        <button>詳しく見る</button>
      </div>
      <div className="vision-content">
        <img src={vision} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
        <button>詳しく見る</button>
      </div>
    </div>
  );
};

const FourthContent = () => {
  return (
    <div className="mission">
      <div className="mission-content">
        <div className="mission-content-title">
          <div className="number">1</div>
          <h3>技術確認</h3>
        </div>
        <img src={mission} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
      </div>
      <div className="mission-content">
        <div className="mission-content-title">
          <div className="number">2</div>
          <h3>技術確認</h3>
        </div>
        <img src={mission} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
      </div>
      <div className="mission-content">
        <div className="mission-content-title">
          <div className="number">3</div>
          <h3>技術確認</h3>
        </div>
        <img src={mission} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
      </div>
      <div className="mission-content">
        <div className="mission-content-title">
          <div className="number">4</div>
          <h3>技術確認</h3>
        </div>
        <img src={mission} alt="" />
        <p>
          昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
        </p>
      </div>
    </div>
  );
};

const FifthContent = () => {
  return (
    <div className="info-design">
      <div className="info-design-content">
        <img src={vision} alt="" />
        <div className="info-design-text">
          <h3>①情報技術</h3>
          <p>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </p>
        </div>
      </div>
      <div className="info-design-content">
        <img src={vision} alt="" />
        <div className="info-design-text">
          <h3>②情報技術</h3>
          <p>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </p>
        </div>
      </div>
      <div className="info-design-content">
        <img src={vision} alt="" />
        <div className="info-design-text">
          <h3>③情報技術</h3>
          <p>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </p>
        </div>
      </div>
      <div className="info-design-content">
        <img src={vision} alt="" />
        <div className="info-design-text">
          <h3>④情報技術</h3>
          <p>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </p>
        </div>
      </div>
      <div className="info-design-content">
        <img src={vision} alt="" />
        <div className="info-design-text">
          <h3>⑤情報技術</h3>
          <p>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </p>
        </div>
      </div>
    </div>
  );
};

const SixthContent = () => {
  return (
    <div>
      <table className="design-table">
        <tr>
          <th>空間に与える印象</th> <th>写真</th> <th>使用のポイント</th>
        </tr>
        <tr>
          <td className="impression">空間を和らげ、安らぎを感じる</td>
          <td>
            <img src={philosophy} alt="" />
          </td>
          <td>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </td>
        </tr>
        <tr>
          <td className="impression">空間を和らげ、安らぎを感じる</td>
          <td>
            <img src={philosophy} alt="" />
          </td>
          <td>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </td>
        </tr>
        <tr>
          <td className="impression">空間を和らげ、安らぎを感じる</td>
          <td>
            <img src={philosophy} alt="" />
          </td>
          <td>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </td>
        </tr>
        <tr>
          <td className="impression">空間を和らげ、安らぎを感じる</td>
          <td>
            <img src={philosophy} alt="" />
          </td>
          <td>
            昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
          </td>
        </tr>
      </table>
    </div>
  );
};

const SeventhContent = () => {
  return (
    <div className="design-prize">
      <p>
        タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入
        ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイ
        タイトルが入ります。タイトルが入ります。タイトルが入ります。トルが入ります。
      </p>
      <div className="prize">
        <p className="date">2012年8月</p>
        <p>
          ・JDC金賞受 居酒屋まる
          <br />
          ・JDG 審査委員特別賞 大湊都美術館 まなとぴあ
        </p>
      </div>
      <div className="prize">
        <p className="date">2012年8月</p>
        <p>
          ・JDC金賞受 居酒屋まる
          <br />
          ・JDG 審査委員特別賞 大湊都美術館 まなとぴあ
        </p>
      </div>
      <div className="prize">
        <p className="date">2012年8月</p>
        <p>
          ・JDC金賞受 居酒屋まる
          <br />
          ・JDG 審査委員特別賞 大湊都美術館 まなとぴあ
        </p>
      </div>
    </div>
  );
};

const EighthContent = () => {
  return (
    <div className="design-example">
      <ul className="design-example-content">
        <li>店舗</li>
        <li>テナント</li>
        <li>オフィス</li>
        <li>インテリア</li>
        <li>什器</li>
      </ul>
    </div>
  );
};

const NinethContent = () => {
  return (
    <div className="office">
      <img src={office} alt="" className="office-main-img" />
      <div className="office-img-area">
        <img src={office} alt="" className="office-sub-img" />
        <img src={office} alt="" className="office-sub-img" />
        <img src={office} alt="" className="office-sub-img" />
      </div>
      <p>
        スライドスライドスライドスライドスライドスライドスライド昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
      </p>
      <h3 className="office-title">製作時のポイント</h3>
      <Accordion />
      <Accordion />
      <Accordion />
    </div>
  );
};

const TenthContent = () => {
  return (
    <div className="future">
      <p>
        タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
      </p>
      <p className="second-text">
        タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入
        ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイ
        タイトルが入ります。タイトルが入ります。タイトルが入ります。トルが入ります。
      </p>
      <button>お問合せ・お見積り</button>
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
    {
      title: "事業使命　MISSION",
      content: <FourthContent />,
    },
    {
      title: "情報技術とデザインと思想",
      content: <FifthContent />,
    },
    {
      title: "デザインの概要",
      content: <SixthContent />,
    },
    {
      title: "デザイン受賞歴",
      content: <SeventhContent />,
    },
    {
      title: "代表デザイン事例",
      content: <EighthContent />,
    },
    {
      title: "バーチャルオフィス",
      content: <NinethContent />,
    },
    {
      title: "未来の展望",
      content: <TenthContent />,
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
