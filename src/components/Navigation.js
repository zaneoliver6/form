import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/answers">Answers</NavLink>
      </div>
   );
}

export default Navigation;