-- AlterTable
ALTER TABLE `GeoWeather` ADD PRIMARY KEY (`ip`);

-- AddForeignKey
ALTER TABLE `UserPreferences` ADD CONSTRAINT `UserPreferences_ip_fkey` FOREIGN KEY (`ip`) REFERENCES `GeoWeather`(`ip`) ON DELETE RESTRICT ON UPDATE CASCADE;
