/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userrole', {
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
    RoleMasterID: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'userrole',
    timestamps: false
  });
};
