var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new FacebookStrategy({
        clientID: '426428817451472',
        clientSecret: '454a66beea8c12630f8723e2f97fea9c',
        callbackURL: '/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    })
);
