/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  adresse?: AdresseDto;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
}
