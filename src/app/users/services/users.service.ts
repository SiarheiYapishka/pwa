import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserBase } from "../interfaces/user.interface";
const baseUrl = 'https://66656bcfd122c2868e409e2e.mockapi.io/api/pwa'


@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private httpClient: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${baseUrl}/users`)
    }

    createUser(userBase: UserBase): Observable<User[]>{
        return this.httpClient.post<User[]>(`${baseUrl}/users`, userBase)
    }
}