import React from 'react';
import PropTypes from 'prop-types';
import ElementWithIcon from './icons/ElementWithIcon';
import {
  HeadBottom,
  MainMenuList,
} from './header';

const SettingsBtnCss = `
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(58, 57, 86, 0.6);
  line-height: 48px;
`;

const HeaderBottom = props => {
  const { route } = props;
  return (
    <HeadBottom className="header_container">
      <MainMenuList className="main_menu_list">
        {mainMenu.map((menuItem, i) => {
          return (
            <li key={i + 'menu_li'} className={`${route === menuItem.navName.eng ? 'active' : ''}`}>
              <ElementWithIcon
                content={menuItem.navName.content}
                elementType="a"
                additionalIconStyles={`font-size: 24px;vertical-align: middle;`}
                href="#"
              >
                {menuItem.navName.jp}
              </ElementWithIcon>
            </li>
          );
        })}
      </MainMenuList>
      <ElementWithIcon
        content="e902"
        elementType="a"
        additionalStyles={SettingsBtnCss}
        additionalIconStyles={`font-size: 24px;vertical-align: middle;`}
        href="#"
      />
    </HeadBottom>
  );
};

const mainMenu = [
  {
    navName: {
      eng: 'magazines',
      jp: 'チャットマガジン',
      content: 'e939',
    },
  },
  {
    navName: {
      eng: 'analytics',
      jp: 'レポート',
      content: 'e901',
    },
  },
  {
    navName: {
      eng: 'user_info',
      jp: 'ユーザーリスト',
      content: 'e903',
    },
  },
  {
    navName: {
      eng: 'talk',
      jp: 'トーク',
      content: 'e900',
    },
  },
];

HeaderBottom.propTypes = { route: PropTypes.string };

export default HeaderBottom;
