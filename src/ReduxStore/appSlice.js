import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "listOfStudentsEntries",
  initialState: {
    fetchStudentDataFrmRds: {},
  },
  reducers: {
    fnToUpdateTheListOfStudents: (state, action) => {
      state.fetchStudentDataFrmRds = { ...action.payload };
    },
  },
});

export const { fnToUpdateTheListOfStudents } = studentSlice.actions;
export default studentSlice.reducer;
