import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { ClientSettings } from "../models/client-settings.model";
import { ICancellationToken } from "./cancellation-token";
import { OperationCancelledException } from "./operation-cancelled-exception";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/Rx';

@Injectable()
export class HttpClient {
  authorizationHeaders: Headers;
  error: any;

  constructor(private http: Http, private settings: ClientSettings) {
    this.authorizationHeaders = new Headers({
      "Authorization": this.settings.AuthToken,
      "BattleTech-Audit": this.settings.AuditToken
    });
  }

  get<T>(url: string, cancellationToken?: ICancellationToken): Promise<T> {
    return this.getResult<T>(
      this.http.get(
        this.settings.BaseApiUrl + url,
        { headers: this.authorizationHeaders }
      ),
      cancellationToken
    );
  }

  post<T>(url: string, data: any, cancellationToken?: ICancellationToken): Promise<T> {
    return this.getResult<T>(
      this.http.post(
        this.settings.BaseApiUrl + url,
        data,
        { headers: this.authorizationHeaders }
      ),
      cancellationToken
    );
  }

  put<T>(url: string, data: any, cancellationToken?: ICancellationToken): Promise<T> {
    return this.getResult<T>(
      this.http.put(
        this.settings.BaseApiUrl + url,
        data,
        { headers: this.authorizationHeaders }
      ),
      cancellationToken
    );
  }

  delete<T>(url: string, cancellationToken?: ICancellationToken): Promise<T> {
    return this.getResult<T>(
      this.http.delete(
        this.settings.BaseApiUrl + url,
        { headers: this.authorizationHeaders }
      ),
      cancellationToken
    );
  }

  private extractData<T>(res: Response): T {
    return res.json() as T;
  }

  private getResult<T>(response: Observable<Response>, cancellationToken?: ICancellationToken): Promise<T> {
    let observable = response
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this))
      .take(1);

    if (cancellationToken) {
      observable = observable.takeUntil(cancellationToken.toObservable());
    }

    return new Promise<T>(
      (resolve, reject) => {
        var data: T;

        observable.subscribe(
          (value: T) => { data = value; },
          (err: any) => { reject(err); },
          () => {
            if (cancellationToken && cancellationToken.isCanceled()) {
              reject(new OperationCancelledException());
              return;
            }

            resolve(data);
          });
      }
    );
  }

  private handleError(error: Response | any) {
    let data: {
      status: number;
      statusText: string;
      message: string;
    };

    if (error instanceof Response) {
      data = {
        status: error.status,
        statusText: error.statusText,
        message: ""
      };

      try {
        const body = error.json();
        data.message = body.error || JSON.stringify(body);
      } catch (ex) {
        data.message = error.text();
      }
    } else {
      data = {
        status: 0,
        statusText: "(unknown)",
        message: error.message || error.toString()
      };
    }

    // TODO: Add in system Logging.
    this.http.post(this.settings.BaseApiUrl + "/api/battletech-logging", data)
      .catch(err => this.error = (err as any));

    return Observable.throw(data.message);
  }
}
