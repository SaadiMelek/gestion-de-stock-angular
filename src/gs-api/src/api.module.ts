/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { Gestionstockv1articlesService } from './services/gestionstockv-1articles.service';
import { ApiService } from './services/api.service';
import { Gestionstockv1categoriesService } from './services/gestionstockv-1categories.service';
import { Gestionstockv1clientsService } from './services/gestionstockv-1clients.service';
import { Gestionstockv1commandesclientsService } from './services/gestionstockv-1commandesclients.service';
import { Gestionstockv1commandesfournisseursService } from './services/gestionstockv-1commandesfournisseurs.service';
import { Gestionstockv1entreprisesService } from './services/gestionstockv-1entreprises.service';
import { Gestionstockv1fournisseursService } from './services/gestionstockv-1fournisseurs.service';
import { Gestionstockv1mouvementstockService } from './services/gestionstockv-1mouvementstock.service';
import { Gestionstockv1utilisateursService } from './services/gestionstockv-1utilisateurs.service';
import { Gestionstockv1ventesService } from './services/gestionstockv-1ventes.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    Gestionstockv1articlesService,
    ApiService,
    Gestionstockv1categoriesService,
    Gestionstockv1clientsService,
    Gestionstockv1commandesclientsService,
    Gestionstockv1commandesfournisseursService,
    Gestionstockv1entreprisesService,
    Gestionstockv1fournisseursService,
    Gestionstockv1mouvementstockService,
    Gestionstockv1utilisateursService,
    Gestionstockv1ventesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
