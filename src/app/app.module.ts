import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './views/news/news.component';
import { PaypalTransferComponent } from './views/paypal-transfer/paypal-transfer.component';
import { ContactInfoComponent } from './views/contact-info/contact-info.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavMenuComponent } from './ui/nav-menu/nav-menu.component';
import { DashboardsComponent } from './ui/dashboards/dashboards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ContactFormComponent } from './ui/contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferFormComponent } from './ui/transfer-form/transfer-form.component';
import { ArticleComponent } from './ui/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsContentComponent } from './ui/news-content/news-content.component';
import { ArticlesListComponent } from './ui/articles-list/articles-list.component';
import { StocksDashboardComponent } from './ui/stocks-dashboard/stocks-dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CoinDetailsComponent } from './ui/coin-details/coin-details.component';
import { SectionCoinDetailsComponent } from './ui/section-coin-details/section-coin-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PaypalTransferComponent,
    ContactInfoComponent,
    NavMenuComponent,
    DashboardsComponent,
    ContactFormComponent,
    TransferFormComponent,
    ArticleComponent,
    NewsContentComponent,
    ArticlesListComponent,
    StocksDashboardComponent,
    CoinDetailsComponent,
    SectionCoinDetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
