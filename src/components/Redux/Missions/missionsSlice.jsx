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
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    [fetchMissions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});
export const { extraReducers } = missionsSlice.actions;
export default missionsSlice.reducer;
