
module.exports = (sequelize, DataTypes) => {
    const mahasiswaModel = sequelize.define(
        'mahasiswaModel',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_at: {
                field: "created_at",
                type: DataTypes.DATE,
                allowNull: false,
            },
            updated_at: {
                field: "updated_at",
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName:
                'tb_mahasiswa',
        }
    );

    return mahasiswaModel
};