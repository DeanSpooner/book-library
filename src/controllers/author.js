const { Author } = require('../models');
const helper = require('./helper');

const create = async (req, res) => {
    const checkAuthor = req.body.author;
    if (checkAuthor == null || checkAuthor == "") {
        return res.status(400).send({ error: `Please ensure all fields are completed.` });
    }

    const checkExisting = await Author.findAll({
        where: {
            author: req.body.author,
        },
    });
    if (checkExisting[0]) {
        return res.status(409).send({ error: `The author ${req.body.author} already exists.` });
    }

    helper.create('author', req, res);
};

const findAll = async (req, res) => {
    helper.findAll('author', req, res);
};

const findById = async (req, res) => {
    helper.findById('author', req, res);
}

const findAllBooks = async (req, res) => {
    helper.findAllBooks('author', req, res);
}

const update = async (req, res) => {
    helper.update('author', req, res);
}

const remove = async (req, res) => {
    helper.remove('author', req, res);
}

module.exports = { create, findAll, findById, findAllBooks, update, remove };