import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebUiComponent } from './web-ui/web-ui.component';
import { HttpClientModule } from '@angular/common/http';

import { AppConfigService } from './app-config.service';

export const appConfigFactory = (appConfigService: AppConfigService) => {
  return () => appConfigService.loadAppConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    WebUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: appConfigFactory,
    }
   ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
