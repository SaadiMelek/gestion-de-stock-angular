/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { EntrepriseDto } from './entreprise-dto';
import { RoleDto } from './role-dto';
export interface UtilisateurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  dateNaissance?: number;
  email?: string;
  password?: string;
  photo?: string;
  adresse?: AdresseDto;
  entreprise?: EntrepriseDto;
  roles?: Array<RoleDto>;
}
