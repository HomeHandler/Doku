import {Component} from '@angular/core';
import {Router} from '@angular/router';
import '../../public/css/styles.css';

@Component({
    selector: 'doku-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private router: Router) {}
}