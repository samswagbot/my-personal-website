import React, { useState } from 'react';

import { Menu, MenuWrapper } from 'Components/components';

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuWrapper open={open} setOpen={setOpen} />
      <Menu open={open} />
    </>
  );
};

export default MobileNavBar;
