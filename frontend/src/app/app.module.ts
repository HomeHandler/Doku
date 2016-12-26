import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { TimeAgoPipe } from './shared/time-ago.pipe';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { MaterialModule } from '@angular/material';
import { Ng2MaterialModule } from "ng2-material";

const appRoutes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'edit', component: EditComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot(),
        Ng2MaterialModule,
    ],
    declarations: [
        AppComponent,
        ListComponent,
        EditComponent,
        TimeAgoPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
