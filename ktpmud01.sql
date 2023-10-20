-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for ktpmud
CREATE DATABASE IF NOT EXISTS `ktpmud` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `ktpmud`;

-- Dumping structure for table ktpmud.joinproject
CREATE TABLE IF NOT EXISTS `joinproject` (
  `idUser` int(11) NOT NULL,
  `idProject` int(11) NOT NULL,
  KEY `FK__user` (`idUser`),
  KEY `FK__project` (`idProject`),
  CONSTRAINT `FK__project` FOREIGN KEY (`idProject`) REFERENCES `project` (`idProject`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__user` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table ktpmud.jointeam
CREATE TABLE IF NOT EXISTS `jointeam` (
  `idUser` int(11) NOT NULL,
  `idTeam` int(11) NOT NULL,
  KEY `FK1` (`idUser`),
  KEY `FK__team` (`idTeam`),
  CONSTRAINT `FK1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__team` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table ktpmud.project
CREATE TABLE IF NOT EXISTS `project` (
  `idProject` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `income` float DEFAULT NULL,
  `status` enum('Y','N') DEFAULT NULL,
  `startTime` date DEFAULT NULL,
  `endTime` date DEFAULT NULL,
  `createAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  `deleteAt` date DEFAULT NULL,
  `idProjectCost` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProject`),
  KEY `FK_project_projectcost` (`idProjectCost`),
  CONSTRAINT `FK_project_projectcost` FOREIGN KEY (`idProjectCost`) REFERENCES `projectcost` (`idProjectCost`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table ktpmud.projectcost
CREATE TABLE IF NOT EXISTS `projectcost` (
  `idProjectCost` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `value` float DEFAULT NULL,
  `createAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  `deleteAt` date DEFAULT NULL,
  PRIMARY KEY (`idProjectCost`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table ktpmud.team
CREATE TABLE IF NOT EXISTS `team` (
  `idTeam` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `isActive` tinyint(4) DEFAULT NULL,
  `createAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  `deleteAt` date DEFAULT NULL,
  PRIMARY KEY (`idTeam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table ktpmud.user
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL DEFAULT '',
  `lastName` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `phone` varchar(50) NOT NULL DEFAULT '',
  `role` varchar(50) NOT NULL DEFAULT '',
  `isActive` tinyint(4) NOT NULL DEFAULT 0,
  `password` varchar(50) NOT NULL DEFAULT '',
  `createAt` date NOT NULL,
  `updateAt` date NOT NULL,
  `deleteAt` date NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
