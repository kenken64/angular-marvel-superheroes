import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { HeroListComponent } from './components/hero-list.component';
import { AppRouteModule } from './approute.module';
import { CharacterComponent } from './components/character.component';
import { MarvelService } from './marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule, AppRouteModule
  ],
  providers: [
    { provide: 'appKey', useValue: '76ee705b0c648cd243529c1870cfbf79' },
    MarvelService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
