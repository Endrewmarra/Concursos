-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: concurso_animart
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `idAdmin` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idEvent` int NOT NULL,
  PRIMARY KEY (`idAdmin`),
  UNIQUE KEY `idAdmin_UNIQUE` (`idAdmin`),
  KEY `idUser_idx` (`idUser`),
  KEY `idEvent_idx` (`idEvent`),
  CONSTRAINT `idEvent` FOREIGN KEY (`idEvent`) REFERENCES `events` (`idEvent`),
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidates`
--

DROP TABLE IF EXISTS `candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidates` (
  `idCandidate` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idEvent` int NOT NULL,
  `Character` varchar(45) NOT NULL,
  `Origin` varchar(45) NOT NULL,
  `ReferenceImage` varchar(255) NOT NULL,
  `PerformanceSong` varchar(255) DEFAULT NULL,
  `Enrollment` varchar(45) DEFAULT NULL,
  `AvarageScore` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`idCandidate`),
  UNIQUE KEY `idCandidate_UNIQUE` (`idCandidate`),
  KEY `idUser_idx` (`idUser`),
  KEY `idEvent_idx` (`idEvent`),
  CONSTRAINT `fk_Candidate_Event` FOREIGN KEY (`idEvent`) REFERENCES `events` (`idEvent`),
  CONSTRAINT `fk_Candidate_User` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `idEvent` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Date` date NOT NULL,
  `Description` text NOT NULL,
  `Modality` enum('Geral','Criativo','Infantil') NOT NULL,
  PRIMARY KEY (`idEvent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `judges`
--

DROP TABLE IF EXISTS `judges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `judges` (
  `idJudge` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idEvent` int NOT NULL,
  `Enrollment` varchar(45) NOT NULL,
  PRIMARY KEY (`idJudge`),
  UNIQUE KEY `Enrollment_UNIQUE` (`Enrollment`),
  UNIQUE KEY `idJudge_UNIQUE` (`idJudge`),
  KEY `idUser_idx` (`idUser`),
  KEY `idEvent_idx` (`idEvent`),
  CONSTRAINT `fk_Judge_Event` FOREIGN KEY (`idEvent`) REFERENCES `events` (`idEvent`),
  CONSTRAINT `fk_Judge_User` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `judges`
--

LOCK TABLES `judges` WRITE;
/*!40000 ALTER TABLE `judges` DISABLE KEYS */;
/*!40000 ALTER TABLE `judges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scores` (
  `idScores` int NOT NULL AUTO_INCREMENT,
  `idEvent` int NOT NULL,
  `idJudge` int NOT NULL,
  `idCandidate` int NOT NULL,
  `CATEGORIA A` decimal(4,2) NOT NULL,
  `CATEGORIA B` decimal(4,2) NOT NULL,
  `CATEGORIA C` decimal(4,2) NOT NULL,
  `CATEGORIA D` decimal(4,2) NOT NULL,
  PRIMARY KEY (`idScores`),
  KEY `idEvent_idx` (`idEvent`),
  KEY `idJudge_idx` (`idJudge`),
  KEY `idCandidate_idx` (`idCandidate`),
  CONSTRAINT `fk_Score_Candidate` FOREIGN KEY (`idCandidate`) REFERENCES `candidates` (`idCandidate`),
  CONSTRAINT `fk_Score_Event` FOREIGN KEY (`idEvent`) REFERENCES `events` (`idEvent`),
  CONSTRAINT `fk_Score_Judge` FOREIGN KEY (`idJudge`) REFERENCES `judges` (`idJudge`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role` enum('Admin','Judge','Candidate') NOT NULL,
  `CreatAt` timestamp NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Endrew Marra Pedrosa','dumarra11@gmail.com','Endrew11','Admin','2026-05-31 01:29:30'),(2,'Mora','mora@gmailcom','mora123','Candidate','2026-05-31 01:32:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-30 23:07:48
