// redux/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
}

// read from LocalStorage 
const loadEmail = (): string => {
  if (typeof window !== 'undefined') {
    const savedEmail = localStorage.getItem('userEmail');
    return savedEmail ? savedEmail : '';
  }
  return '';
};

const initialState: UserState = {
  email: loadEmail(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      // save in LocalStorage 
      if (typeof window !== 'undefined') {
        localStorage.setItem('userEmail', action.payload);
      }
    },
    clearEmail: (state) => {
      state.email = '';
      // delete form LocalStorage 
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userEmail');
      }
    },
  },
});

export const { setEmail, clearEmail } = userSlice.actions;
export default userSlice.reducer;


// old code for temporal stor email
// -----
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interface UserState {
//   email: string;
// }

// const initialState: UserState = {
//   email: '',
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setEmail: (state, action: PayloadAction<string>) => {
//       state.email = action.payload;
//     },
//   },
// });

// export const { setEmail } = userSlice.actions;
// export default userSlice.reducer;
