/*
  Warnings:

  - Added the required column `source` to the `GeoWeather` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GeoWeather` ADD COLUMN `source` VARCHAR(191) NOT NULL;
