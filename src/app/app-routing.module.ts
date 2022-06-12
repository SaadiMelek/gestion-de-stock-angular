import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
