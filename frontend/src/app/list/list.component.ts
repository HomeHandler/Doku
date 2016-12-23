import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import '../../../public/css/styles.css';
import '../rxjs-operators';

interface IDocument {
    Name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    private heroesUrl = 'http://localhost:3000/documents';  // URL to web API
    public documents: IDocument[];

    constructor (private http: Http) {
        this.documents = [];
    }

    ngOnInit() { this.getDocuments(); }

    getDocuments(): Promise<IDocument[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(res => this.extractData(res));
    }

    private extractData(res: Response) {
        let body = res.json();
        return this.documents = (body || []);
    }
}