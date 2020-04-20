import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ChartsModule } from 'ng2-charts';
import { NbThemeModule, NbListModule, NbButtonModule, NbWindowModule, NbTabsetModule,NbChatModule} from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import {NbCardModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbMenuModule } from '@nebular/theme';
import{NbEvaIconsModule}from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent
  ],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbWindowModule.forRoot({closeOnBackdropClick:true,closeOnEsc:true}),
    NbMenuModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ChartsModule, 
    NbLayoutModule,
    HttpClientModule,
    NbSidebarModule,
    NbCardModule,
    NbListModule,
    Ng2SmartTableModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbTabsetModule,
    NbChatModule,
    BrowserAnimationsModule
  ],
  providers: [NbSidebarModule],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
