import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ContactForm from './pages/ContactForm.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
const path = window.location.pathname;

root.render(
  <StrictMode>
    {path === '/form' ? <ContactForm /> : <App />}
  </StrictMode>,
);
