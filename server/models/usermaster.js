/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usermaster', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RowStatus: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Username: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastLogoutDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    LastChangePasswordDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ModifyTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ModifyBy: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TimeStatus: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    UniqueNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'usermaster',
    timestamps: false
  });
};
