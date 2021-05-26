module.exports = (connection, DataTypes) => {
    const schema = {
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'uniqueTag',
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Please include a genre.'
                },
                notNull: {
                    args: true,
                    msg: 'Please include a genre.'
                }
            }
        }
    };

    const GenreModel = connection.define('Genre', schema);
    return GenreModel;
};