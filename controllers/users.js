const usersData = require('../data/users')

exports.getUsers = (req, res, next) => {
    res.status(200).json(usersData)
}

exports.postUser = (req, res, next) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const age = req.body.age;
    
    res.status(201).json({
        message: 'User created successfully',
        post: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
        }
    });
}