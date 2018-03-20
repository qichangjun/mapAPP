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
    getTreeDataPaths(url,ids) : Promise<any> {
        let params = new URLSearchParams();
        params.set('ids',ids)
        params.set('docbase','wison_company')
        params.set('column','object_name')
        params.set('direction','asc')
        params.set('accessToken','e66805ee5135f86c25c5df9a26a18f37')
        params.set('accessUser','czU5dmN1Qm9qREw4cG1XL0NnV3ZXbEx5djRkZDJnaEJVSXNqeHJTckE1RHdwTFpqZ2s5Q2p4Sm0wa3hySCswTlowb3NNQXFTNzNrYWp1TXJpOENjOWdOT29sKzgrVXhMN1hVQWk5UXhKbUIrRUh4SUtycS9jb2tra0pVYmE1SGg=')  
        params.set('locale','zh_CN')  
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