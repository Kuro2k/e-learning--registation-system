import { createSlice } from '@reduxjs/toolkit';
const data = {
    login: false,
}

if (localStorage.getItem('user')) {
    data.login = true;
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: data.login,
    },
    reducers: {
        setloginAction: (state) => {
            state.login = true;
        },
        setlogoutAction: (state) => {
            state.login = false;
        }
    }
})

export const { setloginAction, setlogoutAction } = loginSlice.actions;
export default loginSlice.reducer;