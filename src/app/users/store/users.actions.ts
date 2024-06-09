import { createAction, props } from "@ngrx/store";
import { User, UserBase } from "../interfaces/user.interface";

export const loadUsers = createAction('LOAD USERS LIST') 

export const usersLoaded = createAction('USERS LOADED', props<{users: User[]}>()) 

export const createUser = createAction('CREATE USER',  props<{ userBase: UserBase }>())

export const saveUserForm = createAction('SAFE USER FORM',  props<{ key: keyof UserBase, value: string | number }>())
