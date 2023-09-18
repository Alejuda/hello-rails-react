import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = '/api/greetings/random_greeting';

export const getGreatting = createAsyncThunk('greatting/getGreatting', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.greatting;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  greatting: '',
};

const greattingSlice = createSlice({
  name: 'greatting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreatting.fulfilled, (state, action) => {
        message = action.payload
        state.name = message;
      })
  },
});

export default greattingSlice.reducer;