import React, { Fragment, useState } from 'react';
import Menu from './Menu';
import { MoreButton } from './IconButton';

export default ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <Fragment>
      <MoreButton onClick={openMenu} />
      <Menu anchorEl={anchorEl}
	    keepMounted
	    open={Boolean(anchorEl)}
	    onClose={closeMenu}>
	{ children }
      </Menu>
    </Fragment>
  );
};
