/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
@Injectable({
  providedIn: 'root',
})
class Gestionstockv1articlesService extends __BaseService {
  static readonly findAllPath = '/gestionstock/v1/articles/all';
  static readonly findByCodeArticlePath = '/gestionstock/v1/articles/code/{codeArticle}';
  static readonly savePath = '/gestionstock/v1/articles/create';
  static readonly findAllArticlesByIdCategoryPath = '/gestionstock/v1/articles/filter/{idCategory}';
  static readonly findHistoriqueCommandesClientPath = '/gestionstock/v1/articles/historique/commandeclient/{idArticle}';
  static readonly findHistoriqueCommandesFournisseurPath = '/gestionstock/v1/articles/historique/commandefournisseur/{idArticle}';
  static readonly findHistoriqueVentesPath = '/gestionstock/v1/articles/historique/vente/{idArticle}';
  static readonly findByIdPath = '/gestionstock/v1/articles/id/{idArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de renvoyer la liste des article qui existent dans la BDD
   * @return La liste des articles / liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de renvoyer la liste des article qui existent dans la BDD
   * @return La liste des articles / liste vide
   */
  findAll(): __Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Cette méthode permet de chercher un article par son code
   * @param codeArticle undefined
   * @return L'objet article a été trouvé dans la BDD
   */
  findByCodeArticleResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/code/${codeArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher un article par son code
   * @param codeArticle undefined
   * @return L'objet article a été trouvé dans la BDD
   */
  findByCodeArticle(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeArticleResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Cette méthode permet d'ajouter / modifier un article
   * @param body undefined
   * @return L'objet article créé / modifié
   */
  saveResponse(body?: ArticleDto): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/articles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette méthode permet d'ajouter / modifier un article
   * @param body undefined
   * @return L'objet article créé / modifié
   */
  save(body?: ArticleDto): __Observable<ArticleDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllArticlesByIdCategoryResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/filter/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllArticlesByIdCategory(): __Observable<Array<ArticleDto>> {
    return this.findAllArticlesByIdCategoryResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandesClientResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/historique/commandeclient/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueCommandesClient(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandesClientResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandesFournisseurResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/historique/commandefournisseur/${idArticle}`,
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
   * @return successful operation
   */
  findHistoriqueCommandesFournisseur(): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandesFournisseurResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueVentesResponse(): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/historique/vente/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueVentes(): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesResponse().pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Cette méthode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'objet article a été trouvé dans la BDD
   */
  findByIdResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/articles/id/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'objet article a été trouvé dans la BDD
   */
  findById(idArticle: number): __Observable<ArticleDto> {
    return this.findByIdResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }
}

module Gestionstockv1articlesService {
}

export { Gestionstockv1articlesService }
