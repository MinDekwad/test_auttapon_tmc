import React from 'react';
import './Style.css';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Content/>
      <Footer/>
    </div>
  )
}
export default App;