import React from 'react';
import {
  HeadTop,
  HeadLeft,
  HeadRight,
} from './header';

const HeaderTop = () => {
  return (
    <HeadTop className="header_container">
      <h1>
        <a>
          <img className="logo"></img>
        </a>
      </h1>
      <HeadLeft className="header_top_left_area">
        <div className="page_icon circle_icon">
          <img></img>
        </div>
        <a className="page_name"></a>
      </HeadLeft>
      <HeadRight className="header_top_right_area">
        <div className="user_icon circle_icon">
          <img></img>
        </div>
      </HeadRight>
    </HeadTop>
  );
};

export default HeaderTop;
