import {Injectable} from "@angular/core";
import { Http, Headers, Response,URLSearchParams,RequestOptionsArgs,RequestOptions,ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'

@Injectable()
export class zTreeService {
    constructor(
        private http : Http
    ){}
    getTreeDataPaths(url : string,ids : Array<any>,otherParam : Object) : Promise<any> {
        let params = new URLSearchParams();
        params.set('ids',ids.toString());
        for (let key in otherParam) {
            params.set(key,otherParam[key])
        }         
        return this.http.get(url,{ search: params })
                        .toPromise()
                        .then(res =>
                          this.extractData(res,this)
                        )
                        .catch(error =>
                          this.handleError(error,this)
                        );
    }

    public extractData(res: Response,scope) {
        let body = res.json();    
        if (body.code == 1){
          return body.data || {};
        }          
        // scope.toastr.error(body.message)
        return Promise.reject(body.message);          
    }

    public handleError(error: any,scope): Promise<any> {        
        console.error('http请求发生了错误:', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}