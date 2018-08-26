import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { ServerResponse } from '../../../shared/models/requests/response/server-response.model';
import { User } from '../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = environment.apiUrl;

  constructor(private  httpClient:  HttpClient) { }

  public getUser(userId: number): Observable<User> {
    return this.httpClient.get<ServerResponse>(`${this.API_URL}/users/${userId}`)
    .pipe(
      map(res => new User().deserialize(res.data))
    );
  }
}
