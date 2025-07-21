import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => { state.count += action.payload },
    decrement: (state, action) => { state.count -= action.payload },
    reset: (state) => { state.count = 0 }
  }
});

export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
