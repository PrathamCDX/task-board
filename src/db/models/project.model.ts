import {
    Association,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from 'sequelize';

import sequelize from './sequelize';
import Task from './task.model';

class Project extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: string | null;
    declare createdAt: CreationOptional<Date>;

    declare tasks?: NonAttribute<Task[]>;

    static associations: {
        tasks:Association<Project,Task>;
    };
}

Project.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'projects',
    sequelize,
    underscored: true,
    timestamps: false
});

export default Project;
