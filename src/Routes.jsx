import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import NewsCards from './components/NewsCards/NewsCards';
import About from './pages/home/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<NewsCards articles={newsArticles} activeArticle = {activeArticle} />} />
      <Route path="/about" element={<About />}/>
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;