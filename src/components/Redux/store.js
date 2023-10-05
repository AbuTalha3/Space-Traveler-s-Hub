// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './Missions/missionsSlice';
import rocketsSlice from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
    rockets: rocketsSlice,
  },
});
export default store;
