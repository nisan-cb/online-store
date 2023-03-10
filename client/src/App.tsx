import React from 'react';
import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navbar from './components/header/components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* current page  */}
      <Content />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
