import './../stylesheets/Layout.scss';
import { useState } from 'react';
import useWindowListener from './../hooks/useWindowListener.js';
import { Outlet, NavLink } from 'react-router-dom';
import hcLogoRays from './../assets/bullhorn-bw-200x200px.png';
import hcLogo from './../assets/bullhorn-bw-100px-no-rays.png';

const Layout = () => {
  // STATE
  const [windowSize, updateWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // HOOKS
  useWindowListener('resize', event => {
    updateWindowSize([window.innerWidth, window.innerHeight]);
  });

  return (
    <div id='app-container'>
      <div id='header-container'>
        <nav id='main-nav'>
          <ul>
            <li>
              <NavLink id='home-header' to='/'>
                <img id='header-logo' src={hcLogo} alt='Bullhorn logo' />
                <h3>HEAR CHANGES</h3>
              </NavLink>
            </li>
            <div id='right-nav'>
              <li>
                <NavLink to='/login'>
                  <span className='material-symbols-outlined nav-icon'>
                    account_circle
                  </span>
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <Outlet />
      <div>{`${windowSize[0]}W x ${windowSize[1]}H`}</div>
    </div>
  );
};

export default Layout;
