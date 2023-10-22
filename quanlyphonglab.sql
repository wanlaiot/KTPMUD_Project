-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2023 at 04:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ktpmud`
--

-- --------------------------------------------------------

--
-- Table structure for table `joinproject`
--

CREATE TABLE `joinproject` (
  `idUser` int(11) NOT NULL,
  `idProject` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `joinproject`
--

INSERT INTO `joinproject` (`idUser`, `idProject`) VALUES
(101, 1),
(102, 1),
(103, 2),
(104, 2),
(105, 2),
(106, 3),
(107, 4),
(108, 4),
(109, 4),
(110, 5),
(111, 5),
(112, 6),
(113, 6),
(114, 7);

-- --------------------------------------------------------

--
-- Table structure for table `jointeam`
--

CREATE TABLE `jointeam` (
  `idUser` int(11) NOT NULL,
  `idTeam` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jointeam`
--

INSERT INTO `jointeam` (`idUser`, `idTeam`) VALUES
(101, 1001),
(102, 1001),
(103, 1002),
(104, 1002),
(105, 1002),
(106, 1003),
(107, 1004),
(108, 1004),
(109, 1004),
(110, 1005),
(111, 1005),
(112, 1006),
(113, 1006),
(114, 1007);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
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
  `idProjectCost` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`idProject`, `name`, `description`, `income`, `status`, `startTime`, `endTime`, `createAt`, `updateAt`, `deleteAt`, `idProjectCost`) VALUES
(1, 'Cảnh báo cháy ', 'Giúp người dùng nhận biết được nguy cơ cháy nổ', 135, 'Y', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 11),
(2, 'Thiết bị bay không người lái', 'Giúp phục vụ công việc', 120, 'N', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 12),
(3, 'Hệ thống cảnh báo chướng ngại vật', 'Giúp cảnh báo chướng ngại vật', 130, 'Y', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 13),
(4, 'Hệ thống giao thông thông minh', 'Giúp giao thông thuận tiện hơn', 115, 'Y', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 14),
(5, 'Website bán đồ gia dụng', 'Bán các đồ hay dùng trong nhà', 118, 'N', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 15),
(6, 'Thiết bị phòng chống đuối nước', 'Giúp nhận biết nguy hiểm kịp thời ứng phó đuối nước', 127, 'Y', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 16),
(7, 'Gậy dành cho người bị khiếm thính', 'Giúp người bị khiếm thính dò đường đi dễ dàng hơn', 143, 'Y', '2023-12-03', '2024-01-25', '2023-12-12', '2023-12-12', '2024-02-10', 17);

-- --------------------------------------------------------

--
-- Table structure for table `projectcost`
--

CREATE TABLE `projectcost` (
  `idProjectCost` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `value` float DEFAULT NULL,
  `createAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  `deleteAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projectcost`
--

INSERT INTO `projectcost` (`idProjectCost`, `title`, `value`, `createAt`, `updateAt`, `deleteAt`) VALUES
(11, 'Project 1', 135, '2023-12-12', '2023-12-12', '2024-02-10'),
(12, 'Project 1', 120, '2023-12-12', '2023-12-12', '2024-02-10'),
(13, 'Project 2', 130, '2023-12-12', '2023-12-12', '2024-02-10'),
(14, 'Project 1', 115, '2023-12-12', '2023-12-12', '2024-02-10'),
(15, 'Project 2', 118, '2023-12-12', '2023-12-12', '2024-02-10'),
(16, 'Project 3', 127, '2023-12-12', '2023-12-12', '2024-02-10'),
(17, 'Project 4', 143, '2023-12-12', '2023-12-12', '2024-02-10');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `idTeam` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `isActive` tinyint(4) DEFAULT NULL,
  `createAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  `deleteAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`idTeam`, `name`, `description`, `isActive`, `createAt`, `updateAt`, `deleteAt`) VALUES
(1001, 'Nhóm 01', 'Thành công', 1, '2023-11-23', '2023-11-23', '2100-11-23'),
(1002, 'Nhóm 02', 'Nhiệt huyết', 1, '2023-11-25', '2023-11-25', '2100-11-25'),
(1003, 'Nhóm 03', 'Chiến thắng', 1, '2023-11-26', '2023-11-26', '2100-11-26'),
(1004, 'Nhóm 04', 'Đam mê', 1, '2023-11-27', '2023-11-27', '2100-11-27'),
(1005, 'Nhóm 05', 'Sôi động', 1, '2023-11-28', '2023-11-28', '2100-11-28'),
(1006, 'Nhóm 06', 'Kiên cường', 1, '2023-11-29', '2023-11-29', '2100-11-29'),
(1007, 'Nhóm 07', 'Can đảm', 1, '2023-11-30', '2023-11-30', '2100-11-30');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
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
  `deleteAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`idUser`, `firstName`, `lastName`, `email`, `phone`, `role`, `isActive`, `password`, `createAt`, `updateAt`, `deleteAt`) VALUES
(101, 'Lê Minh', 'Long', 'Long.LM213986@sis.hust.edu.vn', '0835880860', 'Quản lý', 1, 'Longdepzai', '2023-11-05', '2023-11-05', '2100-11-05'),
(102, 'Phạm Văn', 'An', 'An.PV213970@sis.hust.edu.vn', '0836595358', 'Thành viên', 1, 'Andepzai', '2023-11-06', '2023-11-06', '2100-11-06'),
(103, 'Phạm Viết', 'Chuyên', 'Chuyen.PV210125@sis.hust.edu.vn', '0936591537', 'Quản lý', 1, 'Chuyendepzai', '2023-11-06', '2023-11-06', '2100-11-06'),
(104, 'Lã Hồng', 'Quân', 'Quan.LH214060@sis.hust.edu.vn', '0849259385', 'Thành viên', 1, 'Quandepzai', '2023-11-06', '2023-11-06', '2100-11-06'),
(105, 'Vũ Tuấn', 'Minh', 'Minh.VT214015@sis.hust.edu.vn', '0858244936', 'Thành viên', 1, 'Minhdepzai', '2023-11-20', '2023-11-20', '2100-11-20'),
(106, 'Trần Hữu', 'Nhật', 'Nhat.TH214033@sis.hust.edu.vn', '0859255937', 'Quản lý', 1, 'Nhatdepzai', '2023-11-21', '2023-11-21', '2100-11-21'),
(107, 'Vũ Trường', 'An', 'An.VT213792@sis.hust.edu.vn', '0839204926', 'Quản lý', 1, 'Anthongminh', '2023-11-18', '2023-11-18', '2100-11-18'),
(108, 'Dương Sỹ', 'Bình', 'Binh.DS213819@sis.hust.edu.vn', '0839208457', 'Thành viên', 1, 'Binhdepzai', '2023-11-18', '2023-11-18', '2100-11-18'),
(109, 'Trần Quang', 'Đạt', 'Dat.TQ213868@sis.hust.edu.vn', '0839250125', 'Thành viên', 1, 'Datthongminh', '2023-11-18', '2023-11-18', '2100-11-18'),
(110, 'Nguyễn Hồng', 'Điệp', 'Diep.NH210182@sis.hust.edu.vn', '0829159374', 'Quản lý', 1, 'Diepdeptrai', '2023-11-22', '2023-11-22', '2100-11-22'),
(111, 'Lương Văn', 'Dương', 'Duong.LV213854@sis.hust.edu.vn', '0839183749', 'Thành viên', 1, 'Duongdeptrai', '2023-11-22', '2023-11-22', '2100-11-22'),
(112, 'Diêm Đăng', 'Duy', 'Duy.DD213846@sis.hust.edu.vn', '0839218246', 'Quản lý', 1, 'Duydeptrai', '2023-11-23', '2023-11-23', '2100-11-23'),
(113, 'Đặng Văn', 'Hải', 'Hai.DV203698@sis.hust.edu.vn', '0839201835', 'Thành viên', 1, 'Haithongminh', '2023-11-23', '2023-11-23', '2100-11-23'),
(114, 'Lương Trung', 'Hieu', 'Hieu.LT203419@sis.hust.edu.vn', '0839287394', 'Quản lý', 1, 'Hieuthongminh', '2023-11-24', '2023-11-24', '2100-11-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `joinproject`
--
ALTER TABLE `joinproject`
  ADD KEY `FK__user` (`idUser`),
  ADD KEY `FK__project` (`idProject`);

--
-- Indexes for table `jointeam`
--
ALTER TABLE `jointeam`
  ADD KEY `FK1` (`idUser`),
  ADD KEY `FK__team` (`idTeam`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`idProject`),
  ADD KEY `FK_project_projectcost` (`idProjectCost`);

--
-- Indexes for table `projectcost`
--
ALTER TABLE `projectcost`
  ADD PRIMARY KEY (`idProjectCost`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`idTeam`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `joinproject`
--
ALTER TABLE `joinproject`
  ADD CONSTRAINT `FK__project` FOREIGN KEY (`idProject`) REFERENCES `project` (`idProject`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK__user` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `jointeam`
--
ALTER TABLE `jointeam`
  ADD CONSTRAINT `FK1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK__team` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `FK_project_projectcost` FOREIGN KEY (`idProjectCost`) REFERENCES `projectcost` (`idProjectCost`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
