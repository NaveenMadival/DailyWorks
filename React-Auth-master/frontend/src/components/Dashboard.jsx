import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Sidebar from './Sidebar';
import {
  DashboardContainer,
  WelcomeMessage,
  UserInfo,
  UserInfoTitle,
  UserInfoContent,
  RecentActivities,
  ActivitiesTitle,
  ActivitiesList,
  ActivityItem,
  QuickLinks,
  QuickLinkButton,
  TutorialsSection,
  TutorialsTitle,
  TutorialLink,
} from '../styles/DashboardStyles';

import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../styles/dashboardStyles2';


const Dashboard = () => { 
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const user = {
    fullName: "Naveen Madival",
    email: "Naveenmadival@gmail.com"
  };

  return (
    <DashboardContainer>
      <Sidebar/>
      <WelcomeMessage>Welcome Back, {user.fullName}!</WelcomeMessage>

      <UserInfo>
        <UserInfoTitle>Admin Information</UserInfoTitle>
        <UserInfoContent><strong>Name:</strong> {user.fullName}</UserInfoContent>
        <UserInfoContent><strong>Email:</strong> {user.email}</UserInfoContent>
      </UserInfo>

      <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>20</CardContent>
              </Card>
            </CardContainer>
          </Section>
          </TopContent>

          <TopContent>
          <Section>
            <CardContainer>
              <Card>
                <CardTitle>Performance</CardTitle>
                <CardContent>80%</CardContent>
              </Card>
              <Card>
                <CardTitle>Results</CardTitle>
                <CardContent>90%</CardContent>
              </Card>
              <Card>
                <CardTitle>Announcements</CardTitle>
                <CardContent>School Annual Day</CardContent>
              </Card>
              <Card>
                <CardTitle>Events</CardTitle>
                <CardContent>Sports Day</CardContent>
              </Card>
            </CardContainer>
          </Section>
          </TopContent>

 
      <QuickLinks>
        <QuickLinkButton onClick={() => alert('Profile Settings clicked!')}>Profile Settings</QuickLinkButton>
        <QuickLinkButton onClick={handleLogout}>Logout</QuickLinkButton>
      </QuickLinks>

      <TutorialsSection>
        <TutorialsTitle>Check out the latest tutorials</TutorialsTitle>
        <TutorialLink href="https://www.youtube.com/@yatunyibrian/videos" target="_blank">Visit Coding with Brian on YouTube</TutorialLink>
      </TutorialsSection>
    </DashboardContainer>
  );
};

export default Dashboard;
