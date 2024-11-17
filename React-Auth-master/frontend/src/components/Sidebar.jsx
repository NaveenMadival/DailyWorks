import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import logo from "../assets/logo.png";
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '220px' : '60px')};
  height: 100%;
  background-color: #2c3e50; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 20px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')}; /* Hide sidebar on small screens */
    transition: width 0.3s ease;
  }
`;

const SidebarHeader = styled.div`
  padding: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 2px;
  margin-top: 20px;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 11px 20px;
  font-size: 14px;
  border-bottom: 1px solid #34495e; /* Darker border */
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #34495e; /* Darker background on hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;

const SidebarIcon = styled.div``;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 auto;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: -40px;  /* Position toggle button on the right side */
  width: 40px;
  height: 40px;
  background-color: #34495e; /* Darker background */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110; /* Ensure button is above sidebar */
  
  @media (min-width: 769px) {
    display: none; /* Hide toggle button on larger screens */
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <Logo src={logo} alt="Your logo" />
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon><BsGraphUp /></SidebarIcon>
            <StyledLink to="">Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsPeople /></SidebarIcon>
            <StyledLink to="">Students</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsPerson /></SidebarIcon>
            <StyledLink to="">Teachers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsFileText /></SidebarIcon>
            <StyledLink to="">Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsBook /></SidebarIcon>
            <StyledLink to="">Exams</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsGraphDown /></SidebarIcon>
            <StyledLink to="">Performance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsCalendar /></SidebarIcon>
            <StyledLink to="">Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsBook /></SidebarIcon>
            <StyledLink to="">Library</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsChatDots /></SidebarIcon>
            <StyledLink to="">Announcement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsCalendarEvent /></SidebarIcon>
            <StyledLink to="">Events & Calendar</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsGear /></SidebarIcon>
            <StyledLink to="">Settings & Profile</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>

      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? '←' : '→'} {/* Toggle icon */}
      </ToggleButton>
    </>
  );
};

export default Sidebar;
