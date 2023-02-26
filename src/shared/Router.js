import React from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 한다.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import Layout from '../components/layout/Layout';
import MainBgLayout from '../components/layout/MainBgLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainBgLayout>
              <WelcomePage />
            </MainBgLayout>
          }
        />
        <Route
          path="login/"
          element={
            <MainBgLayout>
              <LoginPage />
            </MainBgLayout>
          }
        />
        <Route
          path="signup/"
          element={
            <MainBgLayout>
              <SignupPage />
            </MainBgLayout>
          }
        />
        <Route
          path="home/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="home/:id"
          element={
            <Layout>
              <DetailPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
