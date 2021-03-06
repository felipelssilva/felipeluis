import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { DisqusModule } from "ngx-disqus";
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ConstantsService } from './common/services/constants.service';
import { BlogsService } from './common/services/blogs.service';
import { AboutMeService } from './common/services/aboutme.service';
import { CertificatesService } from './common/services/certificates.service';
import { ProjectsService } from './common/services/projects.service';

import { AboutMeComponent } from './common/about-me/about-me.component';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
import { SocialMediasComponent } from './common/social-medias/social-medias.component';

import { ContactComponentPage } from './pages/contact/contact.component';
import { HomeComponentPage } from './pages/home/home.component';
import { NotFoundComponentPage } from './pages/not-found/not-found.component';
import { AboutMeComponentPage } from './pages/about-me/about-me.component';
import { SocialMediasComponentPage } from './pages/social-medias/social-medias.component';
import { MyProjectsComponentPage } from './pages/my-projects/my-projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { DateAgoPipe } from './common/pipes/date-ago.pipe';
import { LoadingComponent } from './common/loading/loading.component';
import { CardComponent } from './common/card/card.component';
import { BlogsSideComponent } from './common/blogs-side/blogs-side.component';
import { CertificatesComponent } from './common/certificates/certificates.component';
import { LazyLoadImageComponent } from './common/lazy-load-image/lazy-load-image.component';
import { ProjectsComponent } from './common/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponentPage,
    ContactComponentPage,
    NotFoundComponentPage,
    ContactFormComponent,
    AboutMeComponent,
    SocialMediasComponent,
    AboutMeComponentPage,
    SocialMediasComponentPage,
    MyProjectsComponentPage,
    BlogComponent,
    BlogDetailsComponent,
    DateAgoPipe,
    LoadingComponent,
    CardComponent,
    BlogsSideComponent,
    CertificatesComponent,
    LazyLoadImageComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxContentLoadingModule,
    DisqusModule.forRoot('felipeluis'),
    LazyLoadImageModule
  ],
  providers: [
    ConstantsService,
    BlogsService,
    AboutMeService,
    CertificatesService,
    ProjectsService,
    Title,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

