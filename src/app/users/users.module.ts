import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { USERS_FEATURE_KEY, reducer } from "./store/users.reducer";
import { UsersComponent } from "./users.component";
import { UserListComponent } from "./user-list/user-list.component";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./store/users.effects";

@NgModule({
    imports: [StoreModule.forFeature(USERS_FEATURE_KEY, reducer), EffectsModule.forFeature([UsersEffects]), CommonModule],
    declarations: [UsersComponent, UserListComponent],
    exports: [UsersComponent]
})
export class UsersModule{

}