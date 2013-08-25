module.exports = function(compound, User) {

    // define User here
    User.validatesPresenceOf('name', 'email');
    User.validatesPresenceOf('password', {
        if : function() {
            return this.isNewRecord();
        }
    });
    User.validatesUniquenessOf('email');
    User.validatesLengthOf('password', {
        min: 6,
        max: 50,
        if : function() {
            return this.isNewRecord();
        }
    });
    User.validate('password', validatesConfirmation, {
        message: 'Password does not match confirmation.'
    });

    function validatesConfirmation(err) {
        if ((this.isNewRecord() && (this.password !== this.password_confirmation))) err();
    };

    User.validatesFormatOf('email', {
        "with": /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
    });

    User.beforeCreate = function(next, data) {
        var hasher = require("password-hash");
        this.password_hash = hasher.generate(this.password);
        next();
    };

    User.generate_token = function(user, callback) {
        callback = callback || {};
        require('crypto').randomBytes(16, function(ex, buf) {
            user.auth_token = buf.toString('hex');
            var expirationDate = new Date();
            user.token_expiration = expirationDate.setHours(expirationDate.getHours() + 4);
            user.save();
            callback({
                email: user.email,
                name: user.name,
                auth_token: user.auth_token,
                token_expiration: user.token_expiration
            });
        });
    };
};