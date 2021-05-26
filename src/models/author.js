module.exports = (connection, DataTypes) => {
    const schema = {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'uniqueTag',
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Please include an author.'
                },
                notNull: {
                    args: true,
                    msg: 'Please include an author.'
                }
            }
        }
    };

    const AuthorModel = connection.define('Author', schema);
    return AuthorModel;
};