import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employee.js'
import { image,helpers } from 'faker';
import _ from 'lodash';
Meteor.startup(() => {
  // code to run on server at startup
  const records = Employees.find({}).count();
  if(!records) {
        _.times(5000,() => {
            const { name,email,phone } = helpers.createCard();        
            Employees.insert({ name,email,phone,avatar : image.avatar() });
        });
  }
  Meteor.publish('list',function(PerPage) {
    return Employees.find({},{ limit : PerPage });
  });

});
