import { default as noble } from '@abandonware/noble';
export default class Ble {
  public discover(beacons: string[]): void {
    noble.on('discover', async (peripheral: any) => {
      if (beacons.indexOf(peripheral.id) > -1) {
        console.log(peripheral.id, peripheral.rssi);
      }
    });
  }


}

