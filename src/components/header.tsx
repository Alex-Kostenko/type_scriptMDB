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
        item._showOnHeader && 
          <Link to={item.path} key={item.path}>
            <Menu.Item
              
              name={item.path}
              active={activeItem === item.path}
              onClick={() => handleItemClick(item.path)}
              as="div"
            >
              {item.name}
            </Menu.Item>
          </Link>)
      }
    </Menu>
  )
}

export default Header;
