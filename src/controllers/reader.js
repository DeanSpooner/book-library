const { Reader } = require('../models');
const helper = require('./helper');

exports.create = async (req, res) => {
    const checkPassword = req.body.password;
    const checkEmail = req.body.email;
    const checkName = req.body.name;
    if (checkPassword == null || checkEmail == null || checkName == null) {
        return res.status(400).send({ error: `Please ensure all fields are completed.` });
    }

    const checkExisting = await Reader.findAll({
        where: {
            email: req.body.email,
        },
    });
    if (checkExisting[0]) {
        return res.status(409).send({ error: `User with email ${req.body.email} already exists.` });
    }

    if (checkPassword.length < 8 || checkPassword.length > 16) {
        return res.status(422).send({ error: `Password must be between 8 and 16 characters in length.` });
    }

    helper.create('reader', req, res);
};

exports.findAll = async (req, res) => {
    helper.findAll('reader', req, res);
};

exports.findById = async (req, res) => {
    helper.findById('reader', req, res);
}

exports.update = async (req, res) => {
    helper.update('reader', req, res);
}

exports.delete = async (req, res) => {
    helper.remove('reader', req, res);
}