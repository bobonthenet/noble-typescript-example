import { default as noble } from '@abandonware/noble';
export default class Ble {
    discover(beacons) {
        noble.on('discover', async (peripheral) => {
            if (beacons.indexOf(peripheral.id) > -1) {
                console.log(peripheral.id, peripheral.rssi);
            }
        });
    }
}
