import * as noble from '@abandonware/noble';
export default class Ble {
  public distance: number;
  private registry: Object = {};
  private noble: any;


  public discover(beacons: string[]): void {
    this.noble.on('discover', async (peripheral: any) => {
      if (beacons.indexOf(peripheral.id) > -1) {
        console.log(peripheral.id, peripheral.rssi);
      }
    });
  }


}

