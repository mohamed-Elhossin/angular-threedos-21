import { StockComponent } from './council/businees/stock/stock.component';
import { MarketingComponent } from './council/businees/marketing/marketing.component';
import { CEOComponent } from './council/businees/ceo/ceo.component';
import { CyberComponent } from './council/IT/cyber/cyber.component';
import { WebDevelopComponent } from './council/IT/web-develop/web-develop.component';
import { MultimediaComponent } from './committees/multimedia/multimedia.component';
import { SrbrComponent } from './committees/srbr/srbr.component';
import { OperationComponent } from './committees/operation/operation.component';
import { HrdComponent } from './committees/hrd/hrd.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebDesignComponent } from './council/IT/web-design/web-design.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
  { path: 'HRD', component: HrdComponent },
  { path: 'operation', component: OperationComponent },
  { path: 'SRBR', component: SrbrComponent },
  { path: 'multimedia', component: MultimediaComponent },

  { path: 'webDevelop', component: WebDevelopComponent },
  { path: 'webDesign', component: WebDesignComponent },
  { path: 'cyber', component: CyberComponent },
  { path: 'CEO', component: CEOComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'stock', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
