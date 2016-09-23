import React,{ Component } from 'react';
import { Employees } from '../../imports/collections/employee';
import { createContainer } from 'meteor/react-meteor-data';
import EmployeeDetail from './employeedetail';
let page= 4;
class EmployeeList extends Component{
    showMore() {
    Meteor.subscribe('list');
    this.page=(this.page)+2;
    console.log(this.page);
    }
    render() {
        if(!this.props.employees) {
            <div>
                <i className="fa fa-spinner fa-spin fa-5x fa-fw"></i>
                <span className="sr-only">Loading...</span>
            </div>
        }
        return(
            <div>
                <div className="employee-list">
                {this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
                </div>
                <button onClick={() =>{this.showMore()}} className="btn btn-primary">show more</button>
            </div>
        );
    }
}
export default createContainer(() => {
    Meteor.subscribe('list',4);
    return { employees : Employees.find({}).fetch() };
},EmployeeList);