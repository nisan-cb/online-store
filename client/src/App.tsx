import React from 'react';
import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import palette from './theme/palette/index.json'


function App() {

  const style = {
    background: palette.webBackground
  }

  return (
    <div className="App" style={style} >
      <Header />
      {/* current page  */}
      <Content />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
