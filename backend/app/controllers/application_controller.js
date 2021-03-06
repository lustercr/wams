publish('checkAuthToken', checkAuthToken);

//before(checkAuthToken);

function checkAuthToken() {
    var auth_token = req.headers.auth_token || req.query.auth_token,
        user;
    auth_token = typeof auth_token === 'undefined' ? '' : auth_token;
    user = User.findOne({
        where: {
            auth_token: auth_token
        }, async: false
    }, function(err, user) {
        if (err) {
            return send(500, {
                error: "something went wrong",
                code: 'error_500'
            });
        } else if (user && user.token_expiration < new Date()) {
            return send(401, {
                message: "token expired",
                code: 'auth_02'
            });
        } else if (!user) {
            return send(401, {
                message: "Invalid token",
                code: 'auth_01'
            });
        };
        this.current_user = user;
        next();
    }.bind(this));
};