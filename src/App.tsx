import './App.css';
import Header from './components/layout/header';
import { BrowserRouter, Link, Router, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <h1>Welcome to my app</h1>
      </BrowserRouter>
    </div>
  );
}
