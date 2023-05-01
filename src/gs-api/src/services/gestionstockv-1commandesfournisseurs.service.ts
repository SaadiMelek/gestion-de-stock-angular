/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class Gestionstockv1commandesfournisseursService extends __BaseService {
  static readonly findAllPath = '/gestionstock/v1/commandesfournisseurs/all';
  static readonly deleteArticlePath = '/gestionstock/v1/commandesfournisseurs/delete/article/{idCommandeFournisseur}/{idLigneCommande}';
  static readonly findAllLignesCommandesFournisseurByCommandeFournisseurIdPath = '/gestionstock/v1/commandesfournisseurs/lignesCommande/{idCommande}';
  static readonly updateEtatCommandePath = '/gestionstock/v1/commandesfournisseurs/update/etat/{idCommandeFournisseur}/{etatCommande}';
  static readonly updateQuantiteCommandePath = '/gestionstock/v1/commandesfournisseurs/update/quantite/{idCommandeFournisseur}/{idLigneCommande}/{quantity}';
  static readonly findByCodePath = '/gestionstock/v1/commandesfournisseurs/{codeCommandeFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * @param params The `Gestionstockv1commandesfournisseursService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: Gestionstockv1commandesfournisseursService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/delete/article/${params.idCommandeFournisseur}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `Gestionstockv1commandesfournisseursService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: Gestionstockv1commandesfournisseursService.DeleteArticleParams): __Observable<CommandeFournisseurDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/lignesCommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurId(idCommande: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLignesCommandesFournisseurByCommandeFournisseurIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @param params The `Gestionstockv1commandesfournisseursService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommandeFournisseur`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: Gestionstockv1commandesfournisseursService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/update/etat/${params.idCommandeFournisseur}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `Gestionstockv1commandesfournisseursService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommandeFournisseur`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: Gestionstockv1commandesfournisseursService.UpdateEtatCommandeParams): __Observable<CommandeFournisseurDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `Gestionstockv1commandesfournisseursService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantity`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommandeFournisseur`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: Gestionstockv1commandesfournisseursService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/update/quantite/${params.idCommandeFournisseur}/${params.idLigneCommande}/${params.quantity}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `Gestionstockv1commandesfournisseursService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantity`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommandeFournisseur`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: Gestionstockv1commandesfournisseursService.UpdateQuantiteCommandeParams): __Observable<CommandeFournisseurDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param codeCommandeFournisseur undefined
   * @return successful operation
   */
  findByCodeResponse(codeCommandeFournisseur: string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/${codeCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param codeCommandeFournisseur undefined
   * @return successful operation
   */
  findByCode(codeCommandeFournisseur: string): __Observable<CommandeFournisseurDto> {
    return this.findByCodeResponse(codeCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
}

module Gestionstockv1commandesfournisseursService {

  /**
   * Parameters for deleteArticle
   */
  export interface DeleteArticleParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommandeFournisseur: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantity: number;
    idLigneCommande: number;
    idCommandeFournisseur: number;
  }
}

export { Gestionstockv1commandesfournisseursService }
