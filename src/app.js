const express = require('express');

const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('../swagger.json');

const app = express();

const readerRouter = require('./routes/reader');

const bookRouter = require('./routes/book');

const authorRouter = require('./routes/author');

const genreRouter = require('./routes/genre');

app.use(express.json());

app.use('/readers', readerRouter);

app.use('/books', bookRouter);

app.use('/authors', authorRouter);

app.use('/genres', genreRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;