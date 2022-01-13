import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledDiv } from "./Main.styled";

const MainLayout: React.FC = () => {
   return <StyledDiv><Outlet/></StyledDiv>;
}

export default MainLayout;