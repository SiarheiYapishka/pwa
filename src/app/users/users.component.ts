import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, UsersState } from "./store/users.reducer";
import { Observable, tap } from "rxjs";
import { User } from "./interfaces/user.interface";
import { loadUsers } from "./store/users.actions";
import { selectUsers } from "./store/users.selectors";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit{
    users$: Observable<User[]>
    constructor(private store: Store<UsersState>){
        this.users$ = this.store.select(selectUsers).pipe(tap(val => console.log('val', val)))
    }

    ngOnInit(): void {
        this.store.dispatch(loadUsers())
    }
}