/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-01-15 17:19:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for yl_user
-- ----------------------------
DROP TABLE IF EXISTS `yl_user`;
CREATE TABLE `yl_user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of yl_user
-- ----------------------------
INSERT INTO `yl_user` VALUES ('14', 'res', 'c199f0a7ba068c60');
INSERT INTO `yl_user` VALUES ('8', 'qq', 'c199f0a7ba068c60');
INSERT INTO `yl_user` VALUES ('15', 'hyl', 'c199f0a7ba068c60');
