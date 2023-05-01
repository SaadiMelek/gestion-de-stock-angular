/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MouvementStockDto } from '../models/mouvement-stock-dto';
@Injectable({
  providedIn: 'root',
})
class Gestionstockv1mouvementstockService extends __BaseService {
  static readonly correctionStockPositivePath = '/gestionstock/v1/mouvementstock/correctionpositive';
  static readonly entreeStockPath = '/gestionstock/v1/mouvementstock/entree';
  static readonly mouvementStockArticlePath = '/gestionstock/v1/mouvementstock/filter/article/{idArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  correctionStockPositiveResponse(body?: MouvementStockDto): __Observable<__StrictHttpResponse<MouvementStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/mouvementstock/correctionpositive`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementStockDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  correctionStockPositive(body?: MouvementStockDto): __Observable<MouvementStockDto> {
    return this.correctionStockPositiveResponse(body).pipe(
      __map(_r => _r.body as MouvementStockDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  entreeStockResponse(body?: MouvementStockDto): __Observable<__StrictHttpResponse<MouvementStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/mouvementstock/entree`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementStockDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  entreeStock(body?: MouvementStockDto): __Observable<MouvementStockDto> {
    return this.entreeStockResponse(body).pipe(
      __map(_r => _r.body as MouvementStockDto)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  mouvementStockArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<MouvementStockDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/mouvementstock/filter/article/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MouvementStockDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  mouvementStockArticle(idArticle: number): __Observable<Array<MouvementStockDto>> {
    return this.mouvementStockArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<MouvementStockDto>)
    );
  }
}

module Gestionstockv1mouvementstockService {
}

export { Gestionstockv1mouvementstockService }
