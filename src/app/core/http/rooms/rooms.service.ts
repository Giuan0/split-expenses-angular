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
export class RoomsService {
  private API_URL = environment.apiUrl;

  constructor(private  httpClient:  HttpClient) { }

  public getUserNamesByRoom(roomId: number): Observable<User[]> {
    return this.httpClient.get<ServerResponse>(`${this.API_URL}/rooms/users/${roomId}`)
    .pipe(
      map(res => res.data.map(u => new User().deserialize(u)))
    );
  }

  public postRoom(userId: number, roomName: string): Observable<string> {
    return this.httpClient.post<ServerResponse>(`${this.API_URL}/rooms/${userId}`, {name: roomName})
    .pipe(
      map(res => res.message)
    );
  }

  public enrollUser(userEmail: string, roomId: number): Observable<string> {
    return this.httpClient.post<ServerResponse>(`${this.API_URL}/rooms/${roomId}/join`, {email: userEmail})
    .pipe(
      map(res => res.message)
    );
  }
}
