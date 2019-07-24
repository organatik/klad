import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../swagger/api.module';
import { environment } from '../environments/environment';
import { BASE_PATH } from '../swagger/variables';
import { Configuration, ConfigurationParameters } from '../swagger/configuration';

export function apiConfigFactory (): Configuration  {
  const apiKeys: { [key: string]: string } = {};
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    // apiKeys: apiKeys
  };
  return new Configuration(params);
}




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApiModule,
    // ApiModule.forRoot(apiConfigFactory),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: BASE_PATH, useValue: environment.basePath
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
