import * as React from "react";
import "./index.scss"

const HomeHeader: React.FC = () => {
  return (
    <div className="homeHeader">
      <header className="homeHeader__wrapper">
        <a className="homeHeader__city">北京</a>
        <a className="homeHeader__search">输入商户名、地点</a>
        <a className="homeHeader__self">
          <div className="homeHeader__portrait" />
        </a>
      </header>
    </div>
  );
};

export default HomeHeader;