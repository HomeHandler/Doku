import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule
    ],
    declarations: [
        ListComponent
    ],
    bootstrap: [ ListComponent ]
})
export class AppModule { }
