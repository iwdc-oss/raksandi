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
    deletePassword: (state, action): void => {
      const passwordIndex = state.passwordList.indexOf(action.payload)
      state.passwordList.splice(passwordIndex, 1)
    },
  },
})

export const { addPassword, deletePassword } = passwordSlice.actions
export default passwordSlice.reducer
