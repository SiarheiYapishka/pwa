import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/users.reducer";
import { UsersComponent } from "./users.component";
import { UserListComponent } from "./user-list/user-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [StoreModule.forRoot({ users: reducer }), CommonModule],
    declarations: [UsersComponent, UserListComponent],
})
export class UsersModule{

}