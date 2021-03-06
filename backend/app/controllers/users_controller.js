load('application');

before(loadUser, {
    only: ['show', 'edit', 'update', 'destroy']
});


before(use('checkAuthToken'), {
    except: ['login', 'create']
}); 

action(function create() {
    User.create(req.body.User, function (err, user) {
        if (err) {
            send(422, {
                error: user && user.errors || err
            });
        } else {
            send(201, {
                user: user.toObject()
            });
        }
    });
});

// action(function index() {
//     this.title = 'Users index';
//     User.all(function (err, users) {
//         switch (params.format) {
//             case "json":
//                 send({code: 200, data: users});
//                 break;
//             default:
//                 render({
//                     users: users
//                 });
//         }
//     });
// });


action(function login() {
    var email, password;
    email = req.body.email;
    password = req.body.password;
    User.findOne({where: {email: email}}, function(err, user) {
        if (err) {
            send(500, { error: "Something went wrong" });
        } else {
            if (user) {
                var hasher = require('password-hash');
                console.log(user.password_hash);
                if (hasher.verify(password, user.password_hash)) {
                    User.generate_token(user, function(usr) {
                        usr.id = user.id;
                        send(usr);
                    });
                } else {
                    send(422, { error: "Wrong password", code: 'auth_03' });
                };
            } else {
                send(404, { error: "User not found", code: 'auth_04' });
            };
        };
    });
});

action(function show() {
    this.title = 'User show';
    switch(params.format) {
        case "json":
            send(200, this.user);
            break;
        default:
            render();
    }
});

action(function edit() {
    this.title = 'User edit';
    switch(params.format) {
        case "json":
            send(this.user);
            break;
        default:
            render();
    }
});

action(function update() {
    var user = this.user;
    this.title = 'Edit user details';
    this.user.updateAttributes(body.User, function (err) {
        respondTo(function (format) {
            format.json(function () {
                if (err) {
                    send({code: 500, error: user && user.errors || err});
                } else {
                    send({code: 200, data: user});
                }
            });
            format.html(function () {
                if (!err) {
                    flash('info', 'User updated');
                    redirect(path_to.user(user));
                } else {
                    flash('error', 'User can not be updated');
                    render('edit');
                }
            });
        });
    });
});

action(function destroy() {
    this.user.destroy(function (error) {
        respondTo(function (format) {
            format.json(function () {
                if (error) {
                    send({code: 500, error: error});
                } else {
                    send({code: 200});
                }
            });
            format.html(function () {
                if (error) {
                    flash('error', 'Can not destroy user');
                } else {
                    flash('info', 'User successfully removed');
                }
                send("'" + path_to.users + "'");
            });
        });
    });
});

function loadUser() {
    User.find(params.id, function (err, user) {
        if (err || !user) {
            if (!err && !user && params.format === 'json') {
                return send({code: 404, error: 'Not found'});
            }
            redirect(path_to.users);
        } else {
            this.user = user;
            next();
        }
    }.bind(this));
}
