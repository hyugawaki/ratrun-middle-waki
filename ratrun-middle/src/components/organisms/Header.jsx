import React from "react";
import "../../assets/main.scss"

const Header = () => {
  return (
    <header>
      <ul>
        <li>ホーム</li>
        <li>経営理念</li>
        <li>事業理念</li>
        <li>事業目的</li>
        <li>お問い合わせ</li>
      </ul>
      <div>
        <h2 className="header--title" >理念の文章が入ります</h2>
        <p className="header--caption">
          母体が内装解体専門会社であるからこそ、一般的な施工会社<br/>よりも解体費用を抑えることができます。つまり、解体費用を<br/>抑えることで、余力のある資金が生まれ、使い道を広げることができるということです。
          <br/>選択のできる予算の使途も合わせてご提案いたします。
        </p>
      </div>
    </header>
  );
};

export default Header;
