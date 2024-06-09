import { Store } from "@ngrx/store";
import { UsersState } from "./users.reducer";

export class UsersEffects {
    constructor(private store: Store<UsersState>, private readonly actions$: Actions){}
    loadUsers$ = createEffect()


}