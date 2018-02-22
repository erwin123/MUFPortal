/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userprofile', {
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
    FirstName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PhoneNumber1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PhoneNumber2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PhoneImei: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Genre: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BirthDate: {
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
    UserMasterID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'userprofile',
    timestamps: false
  });
};
