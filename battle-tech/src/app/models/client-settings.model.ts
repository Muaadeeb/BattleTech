import { Injectable } from '@angular/core';
import {IPermissions} from "./IPermissions";

@Injectable()
export class ClientSettings {
  BaseApiUrl: string;
  UserKey: string;
  ImageUrl: string;
  AuthToken: string;
  AuditToken: string;
  BaseWebUrl: string;
  Environment: string;
  FirstName: string;
  LastName: string;
  Permissions: IPermissions;
  MinifyJavaScript: boolean;
}
