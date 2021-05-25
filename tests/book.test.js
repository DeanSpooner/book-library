const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');
const { Book } = require('../src/models');

describe('/books', () => {
    let books;
    before(async () => {
        await Book.sync();
    });
    describe('with no records in the database', async () => {
        beforeEach(async () => {
            await Book.destroy({ truncate: { cascade: true } });
        });

        afterEach(async () => {
            await Book.destroy({ truncate: { cascade: true } });
        });

        describe('POST /books', () => {
            it('creates a new book in the database', async () => {
                const response = await request(app).post('/books').send({
                    title: 'In The Miso Soup',
                    author: 'Ryu Murakami',
                    genre: 'Horror',
                    ISBN: '123'
                });

                const bookRecord = await Book.findByPk(response.body.id, {
                    raw: true,
                });

                expect(response.body.title).to.equal('In The Miso Soup');
                expect(bookRecord.title).to.equal('In The Miso Soup');
                expect(bookRecord.author).to.equal('Ryu Murakami');
                expect(bookRecord.genre).to.equal('Horror');
                expect(bookRecord.ISBN).to.equal('123');

                expect(response.status).to.equal(201);
            });

            it('returns a 400 error if field is null', async () => {
                const response = await request(app).post('/readers').send({
                    title: 'Ellie Kemp - My Autobiography',
                    author: 'Ellie Kemp',
                    genre: 'Autobiography'
                });

                expect(response.status).to.equal(400);
                expect(response.body.error).to.equal('Please ensure all fields are completed.');
            });
        });
    });

    describe('with records in the database', async () => {
        before(async () => {
            await Book.sync();
        });

        beforeEach(async () => {
            await Promise.all([
                Book.create({
                    title: 'In The Miso Soup',
                    author: 'Ryu Murakami',
                    genre: 'Horror',
                    ISBN: '123'
                }),
                Book.create({
                    title: '1969',
                    author: 'Ryu Murakami',
                    genre: 'Roman A Clef',
                    ISBN: '456'
                }),
                Book.create({
                    title: 'Alice In Wonderland',
                    author: 'Lewis Carroll',
                    genre: 'Fantasy',
                    ISBN: '041'
                }),
            ]);

            books = await Book.findAll();
        });

        afterEach(async () => {
            await Book.destroy({ truncate: { cascade: true } });
        });

        describe('POST /books', () => {
            it('returns a 409 error if a matching title and author already exists', async () => {
                const response = await request(app).post('/books').send({
                    title: 'Alice In Wonderland',
                    author: 'Lewis Carroll',
                    genre: 'Fantasy',
                    ISBN: '041'
                });

                expect(response.status).to.equal(409);
                expect(response.body.error).to.equal(`The book Alice In Wonderland by Lewis Carroll is already in this library.`);
            });
        });

        describe('GET /books', () => {
            it('gets all books records', async () => {
                const response = await request(app).get('/books').send();

                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(3);

                response.body.forEach((book) => {
                    const expected = books.find((a) => a.id === book.id);

                    expect(book.title).to.equal(expected.title);
                    expect(book.author).to.equal(expected.author);
                    expect(book.genre).to.equal(expected.genre);
                    expect(book.ISBN).to.equal(expected.ISBN);
                });
            });
        });

        describe('GET /books/:id', () => {
            it('gets books record by id', async () => {
                const book = books[0];
                const response = await request(app).get(`/books/${book.id}`);

                expect(response.status).to.equal(200);
                expect(response.body.title).to.equal(book.title);
                expect(response.body.author).to.equal(book.author);
                expect(response.body.genre).to.equal(book.genre);
                expect(response.body.ISBN).to.equal(book.ISBN);

            });

            it('returns a 404 if the book does not exist', async () => {
                const response = await request(app).get('/books/1985');

                expect(response.status).to.equal(404);
                expect(response.body.error).to.equal('The book could not be found.');
            });
        });

        describe('PATCH /books/:id', () => {
            it('updates books author by id', async () => {
                const book = books.filter(
                    (n) => n.dataValues.title === 'In The Miso Soup'
                )[0].dataValues;

                const response = await request(app)
                    .patch(`/books/${book.id}`)
                    .send({ author: 'R Murakami' });
                const updatedBookRecord = await Book.findByPk(book.id, {
                    raw: true,
                });

                expect(response.status).to.equal(200);
                expect(updatedBookRecord.author).to.equal('R Murakami');
            });

            it('returns a 404 if the book does not exist', async () => {
                const response = await request(app)
                    .patch('/books/2015')
                    .send({ author: 'JRR Tolkien' });

                expect(response.status).to.equal(404);
                expect(response.body.error).to.equal('The book could not be found.');
            });
        });

        describe('DELETE /books/:id', () => {
            it('deletes book record by id', async () => {
                const book = books.filter(
                    (n) => n.dataValues.title === 'In The Miso Soup'
                )[0].dataValues;
                const response = await request(app).delete(`/books/${book.id}`);
                const deletedBook = await Book.findByPk(book.id, { raw: true });

                expect(response.status).to.equal(204);
                expect(deletedBook).to.equal(null);
            });

            it('returns a 404 if the book does not exist', async () => {
                const response = await request(app).delete('/books/1885');
                expect(response.status).to.equal(404);
                expect(response.body.error).to.equal('The book could not be found.');
            });
        });
    });
});