import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBrand } from '../shared/models/IBrand';
import { IPagination } from '../shared/models/IPagination';
import { IType } from '../shared/models/IType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  constructor(private httpClient : HttpClient) { }

  getProducts() {
    return this.httpClient.get<IPagination>(environment.baseUrl + 'products');
  }

  getBrands() {
    return this.httpClient.get<IBrand[]>(environment.baseUrl + 'products/brands')
  }

  getTypes() {
    return this.httpClient.get<IType[]>(environment.baseUrl + 'products/types')
  }
}
