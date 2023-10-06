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
  reducers: {
    addReservation: (state, action) => {
      const updatedRocketArr = state.rocketArr.find(
        (rocketObj) => rocketObj.id === action.payload,
      );
      updatedRocketArr.reserved = !updatedRocketArr.reserved;
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const updatedRocketArr = state.rocketArr.filter((rocketObj) => (rocketObj.id !== id));
      return (
        { ...state, reserved: false, rocketArr: updatedRocketArr }
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending,
        (state) => ({ ...state, isLoading: true }))
      .addCase(getRocketData.fulfilled,
        (state, action) => ({
          ...state,
          isLoading: false,
          rocketArr: action.payload.map((rocket) => ({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            flickr_images: rocket.flickr_images,
            reserved: false,
          })),
        }))
      .addCase(getRocketData.rejected,
        (state, action) => ({ ...state, isLoading: false, error: action.payload }));
  },
});

export const { addReservation, cancelReservation, extraReducers } = rocketSlice.actions;
export default rocketSlice.reducer;
