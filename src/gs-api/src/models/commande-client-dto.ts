/* tslint:disable */
import { ClientDto } from './client-dto';
export interface CommandeClientDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idEntreprise?: number;
  client?: ClientDto;
  commandeLivree?: boolean;
}
