import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);

  };

    return (
      <nav className="  navbar navbar-expand-lg">
        <div className="container">

          <h3 className="navbar-brand"> YD</h3>

                <div className="collapse-close ">
                  <button onClick={showDrawer} className="navbar-toggler" type="button" data-toggle="collapse"
                 aria-label="Toggle navigation">
                    <img alt='svg' src="https://img.icons8.com/windows/32/000000/menu--v3.png"/>
                  </button>
                          </div>
                        <div className="navbar-collapse collapse">
                          <ul className="navbar-nav ms-auto mb-1 mb-lg-0 navbar-nav">
                            <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to={'/services'} className="nav-link">Skills</Link></li>
                            <li className="nav-item"><Link to={'/gallery'} className="nav-link">Projects</Link></li>
                            <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>

                            </ul>
                          </div>
                        </div>

      <Drawer className="drawer text-center" title={<h3>Main Menu</h3>}
          placement="right"
          onClose={onClose}
          visible={visible}
          width={256}
          closable={false}

        >
      <div className="drawer-items">
        <div className='mt-1'>
        <div className="menu-items">
            <Link className="text-3xl" onClick={onClose} to={'/'} >Home</Link>
            <Link className="text-3xl p-3" onClick={onClose} to={'/about'} >About</Link>
            <Link className="text-3xl p-3" onClick={onClose} to={'/skills'} >Skills</Link>
              <Link className="text-3xl p-3" onClick={onClose} to={'/projects'} >Projects</Link>
            <Link className="text-3xl p-3" onClick={onClose} to={'/contact'} >Contact</Link>
          </div>


        </div>
       </div>
      </Drawer>
      </nav>
    )
}


export default Navbar
