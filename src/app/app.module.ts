import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { HrdComponent } from './committees/hrd/hrd.component';
import { OperationComponent } from './committees/operation/operation.component';
import { SrbrComponent } from './committees/srbr/srbr.component';
import { MultimediaComponent } from './committees/multimedia/multimedia.component';
import { WebDesignComponent } from './council/IT/web-design/web-design.component';
import { WebDevelopComponent } from './council/IT/web-develop/web-develop.component';
import { CyberComponent } from './council/IT/cyber/cyber.component';
import { CEOComponent } from './council/businees/ceo/ceo.component';
import { MarketingComponent } from './council/businees/marketing/marketing.component';
import { StockComponent } from './council/businees/stock/stock.component';
import { AdvisorComponent } from './advisor/advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    HrdComponent,
    OperationComponent,
    SrbrComponent,
    MultimediaComponent,
    WebDesignComponent,
    WebDevelopComponent,
    CyberComponent,
    CEOComponent,
    MarketingComponent,
    StockComponent,
    AdvisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
