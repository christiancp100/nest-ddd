import { Injectable } from '@nestjs/common';

@Injectable()
export class DeviceFinderService {
  constructor(
    private readonly metricsRepository: any,
    private readonly buildingRepository: any,
  ) {}

  async run(id: number) {
    // Get metrics
    const building = this.buildingRepository.findById(id); // zone id + zone name
    const metrics = this.metricsRepository.findByBuildingId(building.id); // live data + zoneId

    const zoneName = building.zone.name;
    metrics.forEach((metric) => metric.appendZoneName(zoneName));

    return metrics;
  }
}
