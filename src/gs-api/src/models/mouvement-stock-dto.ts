/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MouvementStockDto {
  id?: number;
  dateMouvement?: number;
  quantite?: number;
  idEntreprise?: number;
  typeMouvementStock?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POSITIVE' | 'CORRECTION_NEGATIVE';
  sourceMouvementStock?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  article?: ArticleDto;
}
