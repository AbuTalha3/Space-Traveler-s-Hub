import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missionsArray: [],
  isLoading: false,
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/FetchMissions', () => {
  const response = axios.get(`${url}`).then((response) => response.data);
  return (
    response);
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newMissions = state.missionsArray.find(
        (mission) => mission.mission_id === action.payload,
      );
      newMissions.reserved = !newMissions.reserved;
    },
    cancelMission: (state, action) => {
      const id = action.payload;
      const mission = state.missionsArray.filter((mission) => (mission.mission_id !== id));
      return (
        { ...state, reserved: false, missionsArray: mission }
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchMissions.pending, (state) => ({ ...state, isLoading: true }),
    );
    builder.addCase(
      fetchMissions.fulfilled,
      (state, action) => ({
        ...state,
        isLoading: false,
        missionsArray: action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          reserved: false,
        })),
      }),
    );
    builder.addCase(
      fetchMissions.rejected,
      (state, action) => ({ ...state, isLoading: false, errors: action.payload }),
    );
  },
});
export const { extraReducers, joinMission, cancelMission } = missionsSlice.actions;
export default missionsSlice.reducer;
