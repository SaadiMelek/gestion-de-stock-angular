/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VenteDto } from '../models/vente-dto';
@Injectable({
  providedIn: 'root',
})
class Gestionstockv1ventesService extends __BaseService {
  static readonly findByCodePath = '/gestionstock/v1/ventes/{codeVente}';
  static readonly findByIdPath = '/gestionstock/v1/ventes/{idVente}';
  static readonly deletePath = '/gestionstock/v1/ventes/{idVente}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param codeVente undefined
   * @return successful operation
   */
  findByCodeResponse(codeVente: string): __Observable<__StrictHttpResponse<VenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/ventes/${codeVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VenteDto>;
      })
    );
  }
  /**
   * @param codeVente undefined
   * @return successful operation
   */
  findByCode(codeVente: string): __Observable<VenteDto> {
    return this.findByCodeResponse(codeVente).pipe(
      __map(_r => _r.body as VenteDto)
    );
  }

  /**
   * @param idVente undefined
   * @return successful operation
   */
  findByIdResponse(idVente: number): __Observable<__StrictHttpResponse<VenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/ventes/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VenteDto>;
      })
    );
  }
  /**
   * @param idVente undefined
   * @return successful operation
   */
  findById(idVente: number): __Observable<VenteDto> {
    return this.findByIdResponse(idVente).pipe(
      __map(_r => _r.body as VenteDto)
    );
  }

  /**
   * @param idVente undefined
   */
  deleteResponse(idVente: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/ventes/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idVente undefined
   */
  delete(idVente: number): __Observable<null> {
    return this.deleteResponse(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module Gestionstockv1ventesService {
}

export { Gestionstockv1ventesService }
