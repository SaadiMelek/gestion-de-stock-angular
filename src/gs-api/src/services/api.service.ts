/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { CategoryDto } from '../models/category-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
import { FournisseurDto } from '../models/fournisseur-dto';
import { MouvementStockDto } from '../models/mouvement-stock-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { VenteDto } from '../models/vente-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly deletePath = '/gestionstock/v1/articles/delete/{idArticle}';
  static readonly findAllPath = '/gestionstock/v1/categories/all';
  static readonly delete_1Path = '/gestionstock/v1/categories/delete/{idCategory}';
  static readonly findByCodePath = '/gestionstock/v1/categories/{codeCategory}';
  static readonly savePath = '/gestionstock/v1/commandesclients/create';
  static readonly findAllLignesCommandesClientByCommandeClientIdPath = '/gestionstock/v1/commandesclients/lignesCommande/{idCommande}';
  static readonly updateArticlePath = '/gestionstock/v1/commandesclients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateEtatCommandePath = '/gestionstock/v1/commandesclients/update/etat/{idCommandeClient}/{etatCommande}';
  static readonly findByIdPath = '/gestionstock/v1/commandesclients/{idCommandeClient}';
  static readonly save_1Path = '/gestionstock/v1/commandesfournisseurs/create';
  static readonly updateArticle_1Path = '/gestionstock/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateFournisseurPath = '/gestionstock/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
  static readonly findById_1Path = '/gestionstock/v1/commandesfournisseurs/{idCommandeFournisseur}';
  static readonly delete_2Path = '/gestionstock/v1/commandesfournisseurs/{idCommandeFournisseur}';
  static readonly findById_2Path = '/gestionstock/v1/entreprises/{idEntreprise}';
  static readonly findById_3Path = '/gestionstock/v1/fournisseurs/{idFournisseur}';
  static readonly delete_3Path = '/gestionstock/v1/fournisseurs/{idFournisseur}';
  static readonly correctionStockNegativePath = '/gestionstock/v1/mouvementstock/correctionnegative';
  static readonly sortieStockPath = '/gestionstock/v1/mouvementstock/sortie';
  static readonly stockReelArticlePath = '/gestionstock/v1/mouvementstock/stockreel/{idArticle}';
  static readonly savePhotoPath = '/gestionstock/v1/photos/{id}/{photo}/{context}';
  static readonly findAll_1Path = '/gestionstock/v1/utilisateurs/all';
  static readonly delete_4Path = '/gestionstock/v1/utilisateurs/{idUtilisateur}';
  static readonly findAll_2Path = '/gestionstock/v1/ventes/all';
  static readonly save_2Path = '/gestionstock/v1/ventes/create';
  static readonly authenticatePath = 'gestionstock/v1/auth/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de supprimer un article par son ID
   * @return L'article a été supprimé
   */
  deleteResponse(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/articles/delete/${idArticle}`,
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
   * Cette méthode permet de supprimer un article par son ID
   * @return L'article a été supprimé
   */
  delete(): __Observable<ArticleDto> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Cette méthode permet de renvoyer la liste des categories qui existent dans la BDD
   * @return La liste des categories / liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de renvoyer la liste des categories qui existent dans la BDD
   * @return La liste des categories / liste vide
   */
  findAll(): __Observable<Array<CategoryDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Cette méthode permet de supprimer une category par son ID
   * @return La category a été supprimé
   */
  delete_1Response(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/categories/delete/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Cette méthode permet de supprimer une category par son ID
   * @return La category a été supprimé
   */
  delete_1(): __Observable<CategoryDto> {
    return this.delete_1Response().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Cette méthode permet de chercher une category par son code
   * @return L'objet category a été trouvé dans la BDD
   */
  findByCodeResponse(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/categories/${codeCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher une category par son code
   * @return L'objet category a été trouvé dans la BDD
   */
  findByCode(): __Observable<CategoryDto> {
    return this.findByCodeResponse().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @return successful operation
   */
  saveResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/commandesclients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save(): __Observable<CommandeClientDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllLignesCommandesClientByCommandeClientIdResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/commandesclients/lignesCommande/${idCommande}`,
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
  findAllLignesCommandesClientByCommandeClientId(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesClientByCommandeClientIdResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  updateArticleResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionstock/v1/commandesclients/update/article/${idCommande}/${idLigneCommande}/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateArticle(): __Observable<CommandeClientDto> {
    return this.updateArticleResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateEtatCommandeResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionstock/v1/commandesclients/update/etat/${idCommandeClient}/${etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateEtatCommande(): __Observable<CommandeClientDto> {
    return this.updateEtatCommandeResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findByIdResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/commandesclients/${idCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById(): __Observable<CommandeClientDto> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  save_1Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/create`,
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
   * @return successful operation
   */
  save_1(): __Observable<CommandeFournisseurDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateArticle_1Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/update/article/${idCommande}/${idLigneCommande}/${idArticle}`,
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
   * @return successful operation
   */
  updateArticle_1(): __Observable<CommandeFournisseurDto> {
    return this.updateArticle_1Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateFournisseurResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/update/fournisseur/${idCommande}/${idFournisseur}`,
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
   * @return successful operation
   */
  updateFournisseur(): __Observable<CommandeFournisseurDto> {
    return this.updateFournisseurResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findById_1Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/${idCommandeFournisseur}`,
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
   * @return successful operation
   */
  findById_1(): __Observable<CommandeFournisseurDto> {
    return this.findById_1Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
  delete_2Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/commandesfournisseurs/${idCommandeFournisseur}`,
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
  }  delete_2(): __Observable<null> {
    return this.delete_2Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findById_2Response(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/entreprises/${idEntreprise}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_2(): __Observable<EntrepriseDto> {
    return this.findById_2Response().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  findById_3Response(): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/fournisseurs/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_3(): __Observable<FournisseurDto> {
    return this.findById_3Response().pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
  delete_3Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/fournisseurs/${idFournisseur}`,
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
  }  delete_3(): __Observable<null> {
    return this.delete_3Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockNegativeResponse(): __Observable<__StrictHttpResponse<MouvementStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/mouvementstock/correctionnegative`,
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
   * @return successful operation
   */
  correctionStockNegative(): __Observable<MouvementStockDto> {
    return this.correctionStockNegativeResponse().pipe(
      __map(_r => _r.body as MouvementStockDto)
    );
  }

  /**
   * @return successful operation
   */
  sortieStockResponse(): __Observable<__StrictHttpResponse<MouvementStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/mouvementstock/sortie`,
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
   * @return successful operation
   */
  sortieStock(): __Observable<MouvementStockDto> {
    return this.sortieStockResponse().pipe(
      __map(_r => _r.body as MouvementStockDto)
    );
  }

  /**
   * @return successful operation
   */
  stockReelArticleResponse(): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/mouvementstock/stockreel/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @return successful operation
   */
  stockReelArticle(): __Observable<number> {
    return this.stockReelArticleResponse().pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @return successful operation
   */
  savePhotoResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/photos/${id}/${photo}/${context}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * @return successful operation
   */
  savePhoto(): __Observable<{}> {
    return this.savePhotoResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return successful operation
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_1(): __Observable<Array<UtilisateurDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }
  delete_4Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionstock/v1/utilisateurs/${idUtilisateur}`,
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
  }  delete_4(): __Observable<null> {
    return this.delete_4Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<VenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionstock/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VenteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_2(): __Observable<Array<VenteDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<VenteDto>)
    );
  }

  /**
   * @return successful operation
   */
  save_2Response(): __Observable<__StrictHttpResponse<VenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionstock/v1/ventes/create`,
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
   * @return successful operation
   */
  save_2(): __Observable<VenteDto> {
    return this.save_2Response().pipe(
      __map(_r => _r.body as VenteDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestionstock/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module ApiService {
}

export { ApiService }
