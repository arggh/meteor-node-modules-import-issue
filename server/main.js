import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

// Comment this import to get rid of the error
import { getRole } from "auth";

Meteor.startup(() => {
  let _id;

  const testUser = Meteor.users.findOne({ username: 'test' });

  if (!testUser) {
    _id = Accounts.createUser({ username: "test", password: "test" });
    Meteor.users.update({ _id }, { $set: { role: "system" } });
  } else {
    _id = testUser._id;
  }

  

  // Comment this out to get rid of the error
  const role = getRole(_id);
  console.log('Role was ' + role);
});
