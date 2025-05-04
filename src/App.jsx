
import register from './assets/register.svg';
import login from './assets/login.svg';
import games from './assets/games.svg';
import user from './assets/user.svg';
import settings from './assets/settings.svg';
import home from './assets/home.svg';
import './App.css';
import { Button } from './components/ui/button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AccountPage from './components/account';
import LoginPage from './components/login';
import RegisterPage from './components/register';
import GamesPage from './components/games';
import SettingsPage from './components/settings';
import { useNavigate } from 'react-router-dom';


function Homepage() {
  return (
    <div className="container mx-auto">
      <div className="text-center py-20">
      <div className="container mx-auto">
        <div className="text-center py-20">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your one-stop destination for digital products and services
        </p>
        <div className="flex justify-center gap-4">
          <Button 
          onClick={() => window.location.href = '/games'}
          className="bg-gradient-to-r from-pink-500 to-violet-500 text-white"
          >
          Explore Games
          </Button>
          <Button 
          onClick={() => window.location.href = '/register'}
          variant="outline"
          >
          Get Started
          </Button>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16">
        <div className="text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Easy to Use</h2>
          <p className="text-gray-600">Intuitive interface designed for the best user experience</p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Secure</h2>
          <p className="text-gray-600">Your data is protected with industry-standard security</p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">24/7 Support</h2>
          <p className="text-gray-600">Our team is always here to help you</p>
        </div>
        </div>
        </div>
        </div>
    </div>
    );
}

function App() {  
      return (
        <BrowserRouter>
          <div>
            <nav className="fixed bottom-0 left-0 right-0 bg-accent p-4 h-16 hover:h-64 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="space-y-4"></div>
                <div onClick={() => window.location.href = '/account'} className="flex items-center space-x-4 cursor-pointer mb-8">
                  <img src={user} alt="user" className="w-8 h-8 rounded-full border-2 border-black"/>
                  <span className="whitespace-nowrap overflow-hidden hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 font-medium">Fadhlureza Sebastian</span>
                </div>

                <div onClick={() => window.location.href = '/register'} className="flex items-center space-x-4 cursor-pointer">
                  <img src={register} alt="register" className="w-8 h-8" />
                  <span className="whitespace-nowrap overflow-hidden hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition-all">Register</span>
                </div>

                <div onClick={() => window.location.href = '/login'} className="flex items-center space-x-4 cursor-pointer">
                  <img src={login} alt="login" className="w-8 h-8" />
                  <span className="whitespace-nowrap overflow-hidden hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition-all">Login</span>
                </div>

                <div onClick={() => window.location.href = '/games'} className="flex items-center space-x-4 cursor-pointer">
                  <img src={games} alt="games" className="w-8 h-8" />
                  <span className="whitespace-nowrap overflow-hidden hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition-all">Games</span>
                </div>

                <div onClick={() => window.location.href = '/settings'} className="flex items-center space-x-4 cursor-pointer">
                  <img src={settings} alt="settings" className="w-8 h-8" />
                  <span className="whitespace-nowrap overflow-hidden hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition-all">Settings</span>
                </div>

                <div onClick={() => window.location.href = '/'} className="flex items-center space-x-4 cursor-pointer">
                  <img src={home} alt="home" className="w-8 h-8" />
                  <span className="whitespace-nowrap overflow-hidden hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition-all">Home</span>
                </div>
              </div>
            </nav>
            <main className="flex-1 ml-16">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      );
}

export default App;