module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Please enter a valid name.'
                },
                notNull: {
                    args: true,
                    msg: 'Please enter a valid name.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'uniqueTag',
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Please enter a valid email address.'
                },
                notEmpty: {
                    args: true,
                    msg: 'Please enter a valid email address.'
                },
                notNull: {
                    args: true,
                    msg: 'Please enter a valid email address.'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 16],
                    msg: 'Password must be between 8 and 16 characters in length.'
                },
                notEmpty: {
                    args: true,
                    msg: 'Please enter a valid password.'
                },
                notNull: {
                    args: true,
                    msg: 'Please enter a valid password.'
                }
            }
        },
    };

    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
};