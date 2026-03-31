import { QueryInterface } from 'sequelize';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS project_users (
        projectId INT UNSIGNED NOT NULL,
        userId INT UNSIGNED NOT NULL
      );
    `);
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS project_users;
    `);
    }
};