import "../../assets/main.scss";
import logo from "../../assets/logo.png";
import {facebook, instagram, pinterest} from "../../assets/svg";

const Footer = () => {
  const footerItems = [
    "ホーム",
    "私達について",
    "選ばれる理由",
    "ワークフロー",
    "FAQ",
    "事例紹介",
    "会社概要",
    "お問合せ・お見積",
    "個人情報保護法について",
  ];
  return (
    <footer>
      <div className="footer--content">
        <div className="footer--logo">
          <img src={logo} alt="ロゴマーク" />
          <p>
            Interior design <br /> & <br /> Construction
          </p>
        </div>
        <ul>
          {footerItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="footer--address">
          <p>
            建築・建築デザイン・原状回復・内装解体・建物
            解体・アスベスト除去工事はSENTIAにお任せください！
          </p>
          <br />
          <address>
            <span>株式会社SENTIA</span>
            <br />
            〒454-0982 <br />
            愛知県名古屋市高見1-20-2
            <br />
            TEL : 052-1212-2029
          </address>
        </div>
      </div>
      <div className="footer--icon">
        <a href="#">
          <img src={facebook} alt="" className="icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="" className="icon" />
        </a>
        <a href="#">
          <img src={pinterest} alt="" className="icon" />
        </a>
      </div>
      <p className="copy-right">
        Copyright(c) 店舗設計・デザイン・施工 CYPHER. AllRights Reserved
      </p>
    </footer>
  );
};

export default Footer;
