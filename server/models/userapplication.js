/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userapplication', {
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
    UserMasterID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ApplicationMasterID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LastChekinDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsOnline: {
      type: DataTypes.INTEGER(1),
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
    }
  }, {
    tableName: 'userapplication',
    timestamps: false
  });
};
