/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeClientDto {
  id?: number;
  quantite?: number;
  prixUnitaire?: number;
  article?: ArticleDto;
}
