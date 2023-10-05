import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v4/rockets';

export const getRocketData = createAsyncThunk('rockets/getRocketData', async () => {
  try {
    const response = await axios.get(`${rocketAPI}`).then((response) => response.data);
    return response;
  } catch (error) {
    throw new Error('Failed to fetch rocket data');
  }
});

const initialState = {
  rocketArr: [],
  isLoading: false,
  error: null,
};

const rocketSlice = createSlice({
  name: 'SpaceX Rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending,
        (state) => ({ ...state, isLoading: true }))
      .addCase(getRocketData.fulfilled,
        (state, action) => ({ ...state, isLoading: false, rocketArr: action.payload }))
      .addCase(getRocketData.rejected,
        (state, action) => ({ ...state, isLoading: false, error: action.payload }));
  },
});

export const { extraReducers } = rocketSlice.actions;
export default rocketSlice.reducer;
