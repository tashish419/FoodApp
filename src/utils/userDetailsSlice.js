import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "create",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://655353155449cfda0f2e80d8.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  //to handle all of the states of promise for create action
  extraReducers: {
    [createUser.pending]: (state) => {
      //mutating the state
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      //mutating the state
      state.isLoading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      //mutating the state
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userDetails.reducer;
