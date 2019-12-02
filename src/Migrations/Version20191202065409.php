<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191202065409 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE article');
        $this->addSql('DROP INDEX UNIQ_8D93D6497BA2F5EB ON user');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
        $this->addSql('ALTER TABLE user DROP email, DROP api_token, CHANGE username username VARCHAR(180) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649F85E0677 ON user (username)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, content LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, image VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP INDEX UNIQ_8D93D649F85E0677 ON user');
        $this->addSql('ALTER TABLE user ADD email VARCHAR(180) NOT NULL COLLATE utf8mb4_unicode_ci, ADD api_token VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, CHANGE username username VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D6497BA2F5EB ON user (api_token)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }
}
