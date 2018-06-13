import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {OutputsComponent} from './outputs/outputs.component';
import {SummaryComponent} from './summary/summary.component';
import {MenuComponent} from './menu/menu.component';
import {WalletInfoComponent} from './wallet-info/wallet-info.component';
import {WalletService} from './wallet.service';
import {FailureContentComponent, RefresherComponent, RefresherContentComponent} from './refresher/refresher.component';
import {SenderAlertComponent, SenderComponent, SenderContentComponent} from './sender/sender.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faQuestionCircle,
  faSyncAlt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowAltCircleDown);
library.add(faArrowAltCircleUp);
library.add(faSyncAlt);
library.add(faWallet);
library.add(faQuestionCircle);

const appRoutes: Routes = [
  {path: 'wallet-info', component: WalletInfoComponent},
  {path: 'wallet-outputs', component: OutputsComponent},
  {
    path: '',
    redirectTo: '/wallet-info',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    OutputsComponent,
    SummaryComponent,
    MenuComponent,
    WalletInfoComponent,
    RefresherComponent,
    RefresherContentComponent,
    FailureContentComponent,
    SenderAlertComponent,
    SenderComponent,
    SenderContentComponent,
  ],
  entryComponents: [RefresherContentComponent,
  FailureContentComponent,
  SenderContentComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
