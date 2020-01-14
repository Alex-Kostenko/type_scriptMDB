import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import routs from '../routes/routes'

const Header: React.FC = () =>  {

  const location = useLocation().pathname;
  const [ activeItem, setActiveItem ] = useState('');

  const handleItemClick = (value: string) => {
    setActiveItem(value)
  };

  useEffect(() => {
    setActiveItem(location)
   }, [location]);
  
  return (
    <Menu>
      {routs.map(item => 
        item._showOnHeader && <Menu.Item
          name={item.path}
          active={activeItem === item.path}
          onClick={() => handleItemClick(item.path)}
        >
          <Link to={item.path}>
            {item.name}
          </Link>
        </Menu.Item>)
      }
    </Menu>
  )
}

export default Header;
