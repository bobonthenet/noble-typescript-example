import Ble from "./ble.js";

const Config = {
  id: 'Office',
  source: '0.0.0.0:12345',
  peers: ['0.0.0.0:12345', '0.0.0.0:12346', '0.0.0.0:12347'],
  peerIds: ['Office', 'LivingRoom', 'Bedroom'],
  rooms: ['room1', 'room2', 'room3'],
  beaconIds: ['dd3402055ae5']
};

const ble = new Ble();

ble.discover(Config.beaconIds);