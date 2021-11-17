import { createSlice } from '@reduxjs/toolkit'

type PasswordState<T> = {
  passwordList: Array<T>
}

const initialState: PasswordState<string> = {
  passwordList: [],
}
export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addPassword: (state, action): void => {
      state.passwordList = [...state.passwordList, action.payload]
    },
  },
})

export const { addPassword } = passwordSlice.actions
export default passwordSlice.reducer
