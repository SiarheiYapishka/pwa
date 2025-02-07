import { Action, createReducer, on } from '@ngrx/store'
import { User, UserBase } from '../interfaces/user.interface'
import { saveUserForm, usersLoaded } from './users.actions'

export const USERS_FEATURE_KEY = 'users'

export interface UsersState {
  users: User[]
  userCreationForm: UserBase
}

const initialState: UsersState = {
  users: [],
  userCreationForm: {
    name: '',
    surname: '',
    age: 20,
  },
}
export interface AppState {
  feature: UsersState
}

const usersReducer = createReducer(
  initialState,
  on(usersLoaded, (state, { users }) => ({ ...state, users })),
  on(saveUserForm, (state, { key, value }) => ({
    ...state,
    userCreationForm: { ...state.userCreationForm, [key]: value },
  }))
)

export function reducer(
  state: UsersState | undefined,
  action: Action
): UsersState {
  return usersReducer(state, action)
}
