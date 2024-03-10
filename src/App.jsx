import React, {useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import Sign from './components/Signup.js'
import Login from './components/Login.js'
import AboutUS from './pages/home/AboutUS.js';
import ContactUS from './pages/home/ContactUS.js';
import Footer from './components/Footer/Footer.jsx';



import NewsCards from './components/NewsCards/NewsCards.js';
import useStyles from './styles.js';
import Navbar from './components/Navbar.jsx';
import { Home_Navbar } from './components/Navbar.jsx';
import NewsBoard from './components/NewsBoard.jsx';
import ForgotPassword from './components/ForgotPassword.js';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./components/context/UserAuthContext.js";
import { BrowserRouter , Link, Outlet, useRoutes, Route, Routes } from 'react-router-dom';
import Homes from './pages/home/mainContent/homes/Home.jsx';
import Discover from './pages/home/discover/Discover.jsx';



const alanKey = '607bac5be9d66a31f9350a4a02b9e7852e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => { 
const[category,setCategory] = useState("general");
const [newsArticles, setNewsArticles] = useState([]);
const [activeArticle, setActiveArticle] = useState(-1);
const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1 );
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}): number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                      } else if (article) {
                        window.open(article.url, '_blank');
                      } 
                }
            }
        })
    }, [])

    



    return (
        <div>
            
            {/* <div className={classes.logoContainer}>
                <img src ="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-newspaper-aesthetic-torn-paper-background-with-daily-png-image_10237224.png" className={classes.alanLogo} alt="alan logo"/>
                
            </div>
            <NewsCards articles={newsArticles} activeArticle = {activeArticle} />
            <NewsBoard category={category}/> */}
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"        
                element={
                  <ProtectedRoute>
                     <Home_Navbar/>
                     <div className={classes.logoContainer}>
                <img src ="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-newspaper-aesthetic-torn-paper-background-with-daily-png-image_10237224.png" className={classes.alanLogo} alt="alan logo"/>
                
            </div>    <div>

                  <NewsCards articles={newsArticles} activeArticle = {activeArticle} />
                    </div>
                    <div>
                    <Homes />
                    <Discover />
                    <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
               <Route
                path="/News"
                element={
                  <ProtectedRoute>
                     <Navbar setCategory={setCategory}/>
                    <div>
                    <NewsBoard category={category}/> 
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Sign />} />
              <Route path="/about" element={<AboutUS />}/>
              <Route path="/contact" element={<ContactUS />}/>
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
            </Routes>
          </UserAuthContextProvider>
            
            
             
            
        </div>
    );
}
export default App;