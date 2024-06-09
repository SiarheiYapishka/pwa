import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UsersState } from "./store/users.reducer";
import { Observable } from "rxjs";
import { User } from "./interfaces/user.interface";
import { loadUsers } from "./store/users.actions";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit{
    users$: Observable<User[]>
    constructor(private store: Store<UsersState>){
        this.users$ = this.store.select('users')
    }

    ngOnInit(): void {
        this.store.dispatch(loadUsers())
    }
}