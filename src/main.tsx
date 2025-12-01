import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ContactForm from './pages/ContactForm.tsx';
import Challenges from './pages/Challenges.tsx';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
const path = window.location.pathname;

const getPage = () => {
  if (path === '/form') return <ContactForm />;
  if (path === '/desafios') return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <Challenges />
      <Footer />
    </div>
  );
  return <App />;
};

root.render(
  <StrictMode>
    <ThemeProvider>
      {getPage()}
    </ThemeProvider>
  </StrictMode>,
);
