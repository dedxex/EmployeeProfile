import React from 'react';
import ReactDom from 'react-dom';
import { Component } from 'react';
import  EmployeeList from './components/employeelist';
class App extends Component {
  render() {
    return(
      <div className="container">
        <h2>Employee LIst</h2>
        <EmployeeList />
      </div>
    );
  }
}
Meteor.startup( () => {
ReactDom.render(<App />,document.querySelector('.blog'));
});