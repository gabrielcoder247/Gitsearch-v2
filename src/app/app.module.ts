import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {FormsModule} from '@angular/forms';
import { RoutingModule,} from './routing/routing.module';
import {SearchService} from './search.service'





import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';;
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { UpperPipe } from './pipes/upper.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFormComponent,
    RepositoriesComponent,
    HighlightDirective,
    ReversePipe,
    UpperPipe,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
  
  ],
  imports: [
    HttpClientModule,
    RoutingModule,
    FormsModule,
    BrowserModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
   
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
