DROP SCHEMA IF EXISTS `PatientDB`;

CREATE SCHEMA `PatientDB`;

use `PatientDB`;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `bmi_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gender` varchar(10) DEFAULT NULL,
  `height` smallint DEFAULT NULL,
  `weight` smallint DEFAULT NULL,
  `bmi` decimal(5,2) DEFAULT NULL,
  `bmi_category` varchar(50) DEFAULT NULL,
  `health_risk` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;