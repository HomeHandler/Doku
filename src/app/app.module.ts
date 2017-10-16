import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from "./list/list.component"
import { EditComponent } from "./edit/edit.component"

import { TimeAgoPipe } from './shared/time-ago.pipe';

import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule, // TODO: specify 
    HttpModule, JsonpModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
