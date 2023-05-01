/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { UtilisateurDto } from './utilisateur-dto';
export interface EntrepriseDto {
  id?: number;
  nom?: string;
  description?: string;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  siteWeb?: string;
  adresse?: AdresseDto;
  utilisateurs?: Array<UtilisateurDto>;
}
