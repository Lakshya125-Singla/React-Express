import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './assets/script.js';

import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Hero1 from "./components/Hero1.jsx";
import Content1 from "./components/Content1.jsx";
import Benefits from "./components/Benefits.jsx";
import BottomBanner from "./components/BottomBanner.jsx";
import Header2 from "./components/Header2.jsx";
import MigrationSection from "./components/MigrationSection.jsx";
import Container7 from "./components/Container7.jsx";
import Footer1 from "./components/Footer1.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <Header/>
      <Main/>
      <Hero1/>
      <Content1/>
      <Benefits/>
      <BottomBanner/>
      <Header2/>
      <MigrationSection/>
      <Container7/>
      <Footer1/>
    </>
  );
}

export default App;
