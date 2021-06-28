import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

const Banner = () => {

  const history = useHistory();

  const handleClick = e => {
    history.push(`/${e.key}`)
  };

  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='login' onClick={handleClick}>Login</Menu.Item>
        <Menu.Item key='library' onClick={handleClick}>Library</Menu.Item>
      </Menu>
    </div>
  )
};

export default Banner;
