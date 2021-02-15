# Meteor & node_modules import issue

## How to

```
$ git clone
$ npm start
```

## What happens

The app will crash due to `Error: Cannot find module 'meteor/meteor'`

## Further observations

You can remove or comment lines 5, 22 and 23 in `server/main.js` to get rid of the error.

Then you can observe how a similar import works just fine on the client side in `client/main.js`.

