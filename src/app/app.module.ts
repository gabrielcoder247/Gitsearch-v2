import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';;
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { UpperPipe } from './pipes/upper.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFormComponent,
    RepositoriesComponent,
    HighlightDirective,
    ReversePipe,
    UpperPipe,
  
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
