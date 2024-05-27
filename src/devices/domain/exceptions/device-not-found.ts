export class DeviceNotFoundException extends Error {
  constructor(deviceId: string) {
    super(`Device <${deviceId}> not found`);
  }
}
