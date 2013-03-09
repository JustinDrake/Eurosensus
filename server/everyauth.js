var everyauth = require('everyauth');
// var database = require('./database.js');
var Promise = everyauth.Promise;
// var addUser = database.add;

var usersByFbId = {};
var usersById = {};
var nextUserId = 0;

function addUser (source, sourceUser) {
  var user;
  if (arguments.length === 1) { // password-based
    user = sourceUser = source;
    user.id = ++nextUserId;
    return usersById[nextUserId] = user;
  } else { // non-password-based
    user = usersById[++nextUserId] = {id: nextUserId};
    user[source] = sourceUser;
  }
  return user;
}

everyauth
  .facebook
    .appId('426428817451472')
    .appSecret('454a66beea8c12630f8723e2f97fea9c')
    .findOrCreateUser(function (session, accessToken, accessTokenExtra, fbUserMetadata) {
      return usersByFbId[fbUserMetadata.id] ||
        (usersByFbId[fbUserMetadata.id] = addUser('facebook', fbUserMetadata));
    })
    .redirectPath('/');

// everyauth.facebook
//     .appId('426428817451472')
//     .appSecret('454a66beea8c12630f8723e2f97fea9c')
//     .handleAuthCallbackError(function (req, res) {
//         console.error('Everyauth error!');
//     })
//     .findOrCreateUser(function (session, accessToken, accessTokExtra, fbUserMetadata) {
//         console.log('find or findOrCreateUser')

//         var user = {
//             id: 'test',
//             username: fbUserMetadata.username,
//             password: 'temp'
//         }

//         var promise = new Promise();

//         addUser(user, function () {
//             console.log('Adding user!');

//             // Adding user
//             promise.fulfill(user);
//         });

//         return user;
//     })
//     .redirectPath('/');
