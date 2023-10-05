import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});
export default store;
