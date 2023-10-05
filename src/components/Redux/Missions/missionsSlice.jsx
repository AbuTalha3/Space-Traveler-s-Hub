// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/FetchMissions', () => {
  const response = axios.get(`${url}`).then((response) => response.data);
  return response;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchMissions.pending, (state) => ({ ...state, isLoading: true }),
    );
    builder.addCase(
      fetchMissions.fulfilled,
      (state, action) => ({ ...state, isLoading: false, missions: action.payload }),
      // state.missions = action.payload;
    );
    builder.addCase(
      fetchMissions.rejected,
      (state, action) => ({ ...state, isLoading: false, errors: action.payload }),
      // state.error = action.payload;
    );
  },
});
export const { extraReducers } = missionsSlice.actions;
export default missionsSlice.reducer;
