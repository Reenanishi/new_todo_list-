import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/header.css';

class HeaderComponent extends React.Component {
  render()
  {
    return (
        <div class="header">
        <h1 class="headerh1"> Task Tracker App</h1>
      </div>
    )
  }
}
export default HeaderComponent;