// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});
export default store;
