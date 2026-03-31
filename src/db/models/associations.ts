import Comment from './comment.model';
import Project from './project.model';
import ProjectUser from './projectUsers.model';
import Role from './role.model';
import RoleAssignmentRule from './roleAssignment.model';
import Status from './status.model';
import Task from './task.model';
import User from './user.model';

User.belongsTo(Role, {
    foreignKey: 'roleId',
    as: 'role'
});

User.hasMany(Task, {
    foreignKey: 'assignedTo',
    as: 'assignedTasks'
});

User.hasMany(Task, {
    foreignKey: 'assignedFrom',
    as: 'createdTasks'
});

User.belongsToMany(Project, {
    through: ProjectUser,
    foreignKey: 'userId',
    otherKey: 'projectId',
    as: 'projects'
});

Role.hasMany(User, {
    foreignKey: 'roleId',
    as: 'users'
});

Task.belongsTo(User, {
    foreignKey: 'assignedFrom',
    as: 'assigner'
});

Task.belongsTo(User, {
    foreignKey: 'assignedTo',
    as: 'assignee'
});

Project.belongsToMany(User, {
    through: ProjectUser,
    foreignKey: 'projectId',
    otherKey: 'userId',
    as: 'users'
});

Task.belongsTo(Status, {
    foreignKey: 'statusId',
    as: 'status'
});

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    as: 'project'
});

Task.hasMany(Comment, {
    foreignKey: 'taskId',
    as: 'comments'
});

Status.hasMany(Task, {
    foreignKey: 'statusId',
    as: 'tasks'
});

Project.hasMany(Task, {
    foreignKey: 'projectId',
    as: 'tasks'
});

Comment.belongsTo(Task, {
    foreignKey: 'taskId',
    as: 'task'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

RoleAssignmentRule.belongsTo(Role, {
    foreignKey: 'roleId',
    as: 'assigneeRole'
});
RoleAssignmentRule.belongsTo(Role, {
    foreignKey: 'assignedByRoleId',
    as: 'assignerRole'
});


