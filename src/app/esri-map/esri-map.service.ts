import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams,RequestOptionsArgs,RequestOptions,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
@Injectable()
@Injectable()
export class EsriMapService {

  constructor(
    private http : Http,
    
    private router: Router
  ) { }

  getPositionList() : Promise<any> {
    return this.http.get('/assets/point-list.json')
                    .toPromise()
                    .then(res => {
                      return res.json()
                      })
                    .catch(error =>
                      Promise.reject(error)
                    );
  }
}
