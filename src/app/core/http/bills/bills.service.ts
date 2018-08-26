import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Bill } from '../../../shared/models/bill.model';
import { ServerResponse } from '../../../shared/models/requests/response/server-response.model';
import { PostPurchaseRequest } from '../../../shared/models/requests/body/postPurchaseRequest.model';
import { BillingDetails } from '../../../shared/models/requests/response/billing-details.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private API_URL = environment.apiUrl;

  constructor(private  httpClient:  HttpClient) { }

  public getBills(roomId: number, userId: number): Observable<BillingDetails> {
    return this.httpClient
    .get<ServerResponse>(`${this.API_URL}/billing/room/${roomId}/user/${userId}`)
    .pipe(
      map(res => new BillingDetails(res.data))
    );
  }

  public postPurchase(ownerId: number, payload: PostPurchaseRequest) {
    return this.httpClient.post(`${this.API_URL}/users/purchases/${ownerId}`, payload);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
