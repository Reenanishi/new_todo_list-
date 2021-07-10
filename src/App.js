import React from 'react';
import './css/app.css';
import LayoutComponent from './component/LayoutComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'

class App extends React.Component {
  render() {
    return (
      <div >
        <HeaderComponent></HeaderComponent>
        <LayoutComponent class="layoutbody"> </LayoutComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default App;
