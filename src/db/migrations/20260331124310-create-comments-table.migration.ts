import { QueryInterface } from 'sequelize';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        data VARCHAR(255) DEFAULT NULL,
        user_id INT UNSIGNED NOT NULL,
        task_id INT UNSIGNED NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS comments;
    `);
    }
};