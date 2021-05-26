module.exports = (connection, DataTypes) => {
    const schema = {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Please include a book title.'
                },
                notNull: {
                    args: true,
                    msg: 'Please include a book title.'
                }
            }
        },
        ISBN: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'uniqueTag',
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Please include an ISBN.'
                },
                notNull: {
                    args: true,
                    msg: 'Please include an ISBN.'
                }
            }
        }
    };

    const BookModel = connection.define('Book', schema);
    return BookModel;
};