import { Mission } from './types';

const missions: Mission[] = [...Array(30)].map((mission, index) => ({
  name: `Mission ${index + 1}`,
  rocket: `Rocket ${index + 1}`,
  launch: new Date(),
  status: index % 2 === 0 ? true : false,
}));
export default missions;
