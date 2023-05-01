/* tslint:disable */
import { VenteDto } from './vente-dto';
import { ArticleDto } from './article-dto';
export interface LigneVenteDto {
  id?: number;
  quantite?: number;
  prixUnitaire?: number;
  vente?: VenteDto;
  article?: ArticleDto;
}
