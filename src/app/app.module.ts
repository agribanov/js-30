import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HighlightDirective } from './highlight.directive';
import { HelloPipe } from './hello.pipe';
import { UsersService } from './users.service';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes: Route[] = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},  // /users/
  {path: 'users/:id', component: UserDetailsComponent}, // users/1
  {path: 'example', component: ExampleComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HighlightDirective,
    HelloPipe,
    UsersComponent,
    UsersListComponent,
    NotFoundComponent,
    NavigationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
