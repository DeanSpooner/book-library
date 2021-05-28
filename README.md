# Project: Book Library

# [📘 📙 Click here for the live app! 📕 📗](https://deans-book-library.herokuapp.com/api-docs/)

This project aims to create an app for managing a book library, implementing Sequelize, databases and express.js.

## Purpose

To design and implement an API which can perform CRUD operations on a database. This will take JSON GET, POST, PATCH, PUT and DELETE requests to add, read, update or delete readers, books, authors and genres from a book library database.

## Getting Started

This project requires [NPM](https://www.npmjs.com/get-npm), [Node.js](https://nodejs.org/en/download/), [MySQL](https://www.mysql.com/) and [Docker](https://www.docker.com/).

## Pull this repo and install NPM

    $ git clone https://github.com/DeanSpooner/book-library.git
    $ cd book-library
    $ npm install
    $ npm install express
    $ npm install sequelize

## Configure app

Add the following into `.env` and `.env.test` files in the root folder of the project:

```properties
DB_PASSWORD=password
DB_NAME=book_library
DB_USER=root
DB_HOST=localhost
DB_PORT=3307
PORT=5000
```

## Start the app

    $ npm start

# API Endpoints

| URI                                          | Request Method | CRUD     | What does it do?                                                                         |
| -------------------------------------------- | -------------- | -------- | ---------------------------------------------------------------------------------------- |
| [/readers](#list-all-readers)                | `GET`          | `READ`   | Generate a list of all readers in the database's `Readers` table.                        |
| [/readers](#create-new-reader)               | `POST`         | `CREATE` | Adds a reader to the table in the database.                                              |
| [/readers/\*](#get-reader-by-id)             | `GET`          | `READ`   | Fetches the reader from the database's `Readers` table with the same \* ID (an integer). |
| [/readers/\*](#update-existing-reader-by-id) | `PATCH`        | `UPDATE` | Updates the reader with the matching \* ID.                                              |
| [/readers/\*](#delete-reader-by-id)          | `DELETE`       | `DELETE` | Deletes the reader with the matching \* ID.                                              |
| [/books](#list-all-books)                    | `GET`          | `READ`   | Generate a list of all books in the database's `Books` table.                            |
| [/books](#create-new-books)                  | `POST`         | `CREATE` | Adds a book to the table in the database.                                                |
| [/books/\*](#get-book-by-id)                 | `GET`          | `READ`   | Fetches the book from the database's `Books` table with the same \* ID (an integer).     |
| [/books/\*](#update-existing-book-by-id)     | `PATCH`        | `UPDATE` | Updates the book with the matching \* ID.                                                |
| [/books/\*](#delete-book-by-id)              | `DELETE`       | `DELETE` | Deletes the book with the matching \* ID.                                                |
| [/authors](#list-all-authors)                | `GET`          | `READ`   | Generate a list of all authors in the database's `Authors` table.                        |
| [/authors](#create-new-author)               | `POST`         | `CREATE` | Adds an author to the table in the database.                                             |
| [/authors/\*](#get-author-by-id)             | `GET`          | `READ`   | Fetches the author from the database's `Authors` table with the same \* ID (an integer). |
| [/authors/\*](#update-existing-author-by-id) | `PATCH`        | `UPDATE` | Updates the author with the matching \* ID.                                              |
| [/authors/\*](#delete-author-by-id)          | `DELETE`       | `DELETE` | Deletes the author with the matching \* ID.                                              |
| [/genres](#list-all-genres)                  | `GET`          | `READ`   | Generate a list of all genres in the database's `Genres` table.                          |
| [/genres](#create-new-genre)                 | `POST`         | `CREATE` | Adds a genre to the table in the database.                                               |
| [/genres/\*](#get-genre-by-id)               | `GET`          | `READ`   | Fetches the genre from the database's `Genre` table with the same \* ID (an integer).    |
| [/genres/\*](#update-existing-genre-by-id)   | `PATCH`        | `UPDATE` | Updates the genre with the matching \* ID.                                               |
| [/genres/\*](#delete-genre-by-id)            | `DELETE`       | `DELETE` | Deletes the genre with the matching \* ID.                                               |

---

### List All Readers

`GET` `/readers`

#### Response Body

```json
[
  {
    "id": 1,
    "name": "Dean",
    "email": "dean@dean.com",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z"
  },
  {
    "id": 2,
    "name": "Carolina",
    "email": "carolina@carolina.com",
    "createdAt": "2021-05-08T21:09:56.000Z",
    "updatedAt": "2021-05-08T21:09:56.000Z"
  },
  {
    "id": 3,
    "name": "Matt",
    "email": "matt@matt.com",
    "createdAt": "2021-05-08T21:14:00.000Z",
    "updatedAt": "2021-05-08T21:14:58.000Z"
  }
]
```

---

### Create new Reader

`POST` `/readers`

#### Request Body

```json
{
  "name": "Ellie",
  "email": "ellie@ellie.com",
  "password": "pa55w0rd"
}
```

#### Response Body

```json
{
  "id": 4,
  "name": "Ellie",
  "email": "ellie@ellie.com",
  "updatedAt": "2021-05-08T21:21:08.000Z",
  "createdAt": "2021-05-08T21:21:08.000Z"
}
```

---

### Get Reader by ID

`GET` `/readers/{ ReaderId }`

#### Response Body

```json
{
  "id": 1,
  "name": "Dean",
  "email": "dean@dean.com",
  "createdAt": "2021-05-08T21:01:24.000Z",
  "updatedAt": "2021-05-08T21:01:24.000Z"
}
```

---

### Update existing Reader by ID

`PATCH` `/readers/{ ReaderId }`

#### Request Body

```json
{
  "email": "ellie@el.com"
}
```

#### Response Body

```json
{
  "id": 4,
  "name": "Ellie",
  "email": "ellie@el.com",
  "createdAt": "2021-05-08T21:21:08.000Z",
  "updatedAt": "2021-05-08T21:22:02.000Z"
}
```

---

### Delete Reader by ID

`DELETE` `/readers/{ ReaderId }`

#### Response Body

```json
{}
```

---

### List All Books

`GET` `/books`

#### Response Body

```json
[
  {
    "id": 1,
    "title": "In The Miso Soup",
    "ISBN": "05406821",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z",
    "ReaderId": 2
    "GenreId": 2
    "AuthorId": 1
  },
  {
    "id": 2,
    "title": "Japanese For Beginners",
    "ISBN": "81828384",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z",
    "ReaderId": null
    "GenreId": 1
    "AuthorId": 2
  },
  {
    "id": 3,
    "title": "Australia",
    "ISBN": "90807060",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z",
    "ReaderId": 3
    "GenreId": 3
    "AuthorId": 3
  }
]
```

---

### Create new Book

`POST` `/books`

#### Request Body

```json
{
  "book": "China",
  "ISBN": "10203040",
  "AuthorId": 3,
  "GenreId": 3
}
```

#### Response Body

```json
{
  "id": 4,
    "title": "China",
    "ISBN": "10203040",
    "createdAt": "2021-05-08T21:02:24.000Z",
    "updatedAt": "2021-05-08T21:02:24.000Z",
    "ReaderId": null
    "GenreId": 3
    "AuthorId": 3
}
```

---

### Get Book by ID

`GET` `/books/{ BookId }`

#### Response Body

```json
{
    "id": 3,
    "title": "Australia",
    "ISBN": "90807060",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z",
    "ReaderId": 3
    "GenreId": 3
    "AuthorId": 3
    "Reader": {
    "id": 3,
    "name": "Matt",
    "email": "matt@matt.com",
    "password": "password1234",
    "createdAt": "2021-05-27T17:06:52.000Z",
    "updatedAt": "2021-05-27T17:06:52.000Z"
  },
  "Author": {
    "id": 3,
    "author": "Lonely Planet",
    "createdAt": "2021-05-27T17:08:26.000Z",
    "updatedAt": "2021-05-27T17:08:26.000Z"
  },
  "Genre": {
    "id": 3,
    "genre": "Travel",
    "createdAt": "2021-05-27T17:08:59.000Z",
    "updatedAt": "2021-05-27T17:08:59.000Z"
  }
}
```

---

### Update existing Book by ID

`PATCH` `/books/{ BookId }`

#### Request Body

```json
{
  "title": "New Zealand"
}
```

#### Response Body

```json
{
    "id": 3,
    "title": "New Zealand",
    "ISBN": "90807060",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z",
    "ReaderId": 3
    "GenreId": 3
    "AuthorId": 3
    "Reader": {
      "id": 3,
      "name": "Matt",
      "email": "matt@matt.com",
      "password": "password1234",
      "createdAt": "2021-05-27T17:06:52.000Z",
      "updatedAt": "2021-05-27T17:06:52.000Z"
    },
    "Author": {
      "id": 3,
      "author": "Lonely Planet",
      "createdAt": "2021-05-27T17:08:26.000Z",
      "updatedAt": "2021-05-27T17:08:26.000Z"
    },
    "Genre": {
      "id": 3,
      "genre": "Travel",
      "createdAt": "2021-05-27T17:08:59.000Z",
      "updatedAt": "2021-05-27T17:08:59.000Z"
    }
  }
```

---

### Delete Book by ID

`DELETE` `/books/{ BookId }`

#### Response Body

```json
{}
```

---

### List All Authors

`GET` `/authors`

#### Response Body

```json
[
  {
    "id": 1,
    "author": "Ryu Murakami",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z"
  },
  {
    "id": 2,
    "name": "Japan Times",
    "createdAt": "2021-05-08T21:09:56.000Z",
    "updatedAt": "2021-05-08T21:09:56.000Z"
  },
  {
    "id": 3,
    "name": "Lonely Planet",
    "createdAt": "2021-05-08T21:14:00.000Z",
    "updatedAt": "2021-05-08T21:14:58.000Z"
  }
]
```

---

### Create new Author

`POST` `/authors`

#### Request Body

```json
{
  "author": "George Orwell"
}
```

#### Response Body

```json
{
  "id": 4,
  "author": "George Orwell",
  "updatedAt": "2021-05-08T21:21:08.000Z",
  "createdAt": "2021-05-08T21:21:08.000Z"
}
```

---

### Get Author by ID

`GET` `/readers/{ ReaderId }`

#### Response Body

```json
{
  "id": 1,
  "name": "Ryu Murakami",
  "createdAt": "2021-05-08T21:01:24.000Z",
  "updatedAt": "2021-05-08T21:01:24.000Z",
  "Books": [
    {
      "id": 1,
      "title": "In The Miso Soup",
      "ISBN": "05406821",
      "createdAt": "2021-05-08T21:01:24.000Z",
      "updatedAt": "2021-05-08T21:01:24.000Z",
      "ReaderId": 2,
      "GenreId": 2,
      "AuthorId": 1
    }
  ]
}
```

---

### Update existing Author by ID

`PATCH` `/readers/{ ReaderId }`

#### Request Body

```json
{
  "author": "Genki Japan Times"
}
```

#### Response Body

```json
{
  "id": 2,
  "author": "Genki Japan Times",
  "createdAt": "2021-05-27T17:08:26.000Z",
  "updatedAt": "2021-05-27T17:09:26.000Z",
  "Books": [
    {
      "id": 2,
      "title": "Japanese For Beginners",
      "ISBN": "81828384",
      "createdAt": "2021-05-08T21:01:24.000Z",
      "updatedAt": "2021-05-08T21:01:24.000Z",
      "ReaderId": null
      "GenreId": 1
      "AuthorId": 2
    }
  ]
}
```

---

### Delete Reader by ID

`DELETE` `/readers/{ ReaderId }`

#### Response Body

```json
{}
```

---

### List All Genres

`GET` `/genres`

#### Response Body

```json
[
  {
    "id": 1,
    "genre": "Languages",
    "createdAt": "2021-05-08T21:01:24.000Z",
    "updatedAt": "2021-05-08T21:01:24.000Z"
  },
  {
    "id": 2,
    "genre": "Horror",
    "createdAt": "2021-05-08T21:09:56.000Z",
    "updatedAt": "2021-05-08T21:09:56.000Z"
  },
  {
    "id": 3,
    "genre": "Travel",
    "createdAt": "2021-05-08T21:14:00.000Z",
    "updatedAt": "2021-05-08T21:14:58.000Z"
  }
]
```

---

### Create new Genre

`POST` `/genres`

#### Request Body

```json
{
  "genre": "Fantasy"
}
```

#### Response Body

```json
{
  "id": 4,
  "genre": "Fantasy",
  "updatedAt": "2021-05-08T21:21:08.000Z",
  "createdAt": "2021-05-08T21:21:08.000Z"
}
```

---

### Get Genre by ID

`GET` `/genres/{ GenreId }`

#### Response Body

```json
{
  "id": 1,
  "genre": "Horror",
  "createdAt": "2021-05-08T21:01:24.000Z",
  "updatedAt": "2021-05-08T21:01:24.000Z",
  "Books": [
    {
      "id": 1,
      "title": "In The Miso Soup",
      "ISBN": "05406821",
      "createdAt": "2021-05-08T21:01:24.000Z",
      "updatedAt": "2021-05-08T21:01:24.000Z",
      "ReaderId": 2,
      "GenreId": 2,
      "AuthorId": 1
    }
  ]
}
```

---

### Update existing Genre by ID

`PATCH` `/genre/{ GenreId }`

#### Request Body

```json
{
  "genre": "Adventure"
}
```

#### Response Body

```json
{
  "id": 4,
  "genre": "Adventure",
  "createdAt": "2021-05-08T21:21:08.000Z",
  "updatedAt": "2021-05-08T21:22:02.000Z"
}
```

---

### Delete Reader by ID

`DELETE` `/readers/{ ReaderId }`

#### Response Body

```json
{}
```

## By Dean Spooner and Manchester Codes

[Dean Spooner](https://github.com/DeanSpooner)\
[Manchester Codes](https://github.com/MCRCodes)

## Version History

- 1.0
  - Initial release
  - Updated README.md
  - Tested all reader, book, author and genre CRUD methods work correctly
  - Added Swagger UI
