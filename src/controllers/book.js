const { Book } = require('../models');
const helper = require('./helper');

exports.create = async (req, res) => {
    const checkTitle = req.body.title;
    const checkAuthor = req.body.author;
    const checkGenre = req.body.genre;
    const checkISBN = req.body.ISBN;
    if (checkTitle == null || checkAuthor == null || checkGenre == null || checkISBN == null) {
        return res.status(400).send({ error: `Please ensure all fields are completed.` });
    }

    const checkExisting = await Book.findAll({
        where: {
            title: req.body.title,
            author: req.body.author
        },
    });
    if (checkExisting[0]) {
        return res.status(409).send({ error: `The book ${req.body.title} by ${req.body.author} is already in this library.` });
    }

    helper.create('book', req, res);
};

exports.findAll = async (req, res) => {
    helper.findAll('book', req, res);
};

exports.findById = async (req, res) => {
    helper.findById('book', req, res);
}

exports.findByTitle = async (req, res) => {
    const thisBook = await Book.findAll({
        where: {
            title: req.body.title
        }
    });
    if (!thisBook) {
        return res.status(404).send({ error: 'The book could not be found.' });
    }
    res.status(200).json(thisBook);
}

exports.findByAuthor = async (req, res) => {
    const books = await Book.findAll({
        where: {
            author: req.body.author
        }
    });
    if (!books) {
        return res.status(404).send({ error: 'No books by this author.' });
    }
    res.status(200).json(books);
}

exports.findByGenre = async (req, res) => {
    const books = await Book.findAll({
        where: {
            genre: req.body.genre
        }
    });
    if (!books) {
        return res.status(404).send({ error: 'No books in this genre.' });
    }
    res.status(200).json(books);
}

exports.findByISBN = async (req, res) => {
    const books = await Book.findAll({
        where: {
            ISBN: req.body.ISBN
        }
    });
    if (!books) {
        return res.status(404).send({ error: 'No books in this genre.' });
    }
    res.status(200).json(books);
}

exports.update = async (req, res) => {
    helper.update('book', req, res);
}

exports.delete = async (req, res) => {
    helper.remove('book', req, res);
}