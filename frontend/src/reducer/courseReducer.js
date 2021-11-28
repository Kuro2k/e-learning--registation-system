import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        coursesview: [],
        topcourse: [],
        courseselect: [],
    },
    reducers: {
        setcoursesAction: (state, action) => {
            state.courses = action.payload;
            state.coursesview = action.payload;
            state.topcourse = action.payload.slice(0, 10);
        },
        setcourseviewAction: (state, action) => {
            state.coursesview = action.payload;
        }
    }
})

export const { setcoursesAction, setcourseviewAction } = courseSlice.actions;
export default courseSlice.reducer;