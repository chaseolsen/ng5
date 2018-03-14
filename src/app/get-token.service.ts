import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetTokenService {

  constructor(private http: HttpClient) { }

}
