/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface ClientDto {
  id?: number;
  nom?: string;
  prenom?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  idEntreprise?: number;
  adresse?: AdresseDto;
}
