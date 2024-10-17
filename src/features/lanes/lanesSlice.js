import { createSlice } from '@reduxjs/toolkit';

const lanesSlice = createSlice({
  name: 'lanes',
  initialState: {
    lanes: [],
  },
  reducers: {
    addLane: (state, action) => {
      if (!state.lanes.find(lane => lane.subreddit === action.payload)) {
        state.lanes.push({ subreddit: action.payload, posts: [] });
      }
    },
    removeLane: (state, action) => {
      state.lanes = state.lanes.filter(lane => lane.subreddit !== action.payload);
    },
  },
});

export const { addLane, removeLane } = lanesSlice.actions;
export default lanesSlice.reducer;
