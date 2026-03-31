import {
    Association,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from 'sequelize';

import sequelize from './sequelize';
import User from './user.model';

class ProjectUser extends Model<InferAttributes<ProjectUser>, InferCreationAttributes<ProjectUser>> {
    declare projectId: number;
    declare userId: number;

    declare users?: NonAttribute<User[]>;

    static associations: {
        users:Association<User,ProjectUser>;
    };
}

ProjectUser.init({
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    projectId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
}, {
    tableName: 'project_users',
    sequelize,
    underscored: true,
    timestamps: false
});

export default ProjectUser;
