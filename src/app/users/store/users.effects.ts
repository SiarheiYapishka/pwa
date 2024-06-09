import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, usersLoaded } from "./users.actions";
import { map, switchMap } from "rxjs";
import { UserService } from "../services/users.service";
import { Injectable } from "@angular/core";
@Injectable()
export class UsersEffects {
    constructor(private readonly actions$: Actions, private readonly usersService: UserService){}
    loadUsers$ = createEffect(() => 
        this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() => 
            this.usersService.getUsers()
            .pipe(map(users => usersLoaded({users})
        )
    ))))

}