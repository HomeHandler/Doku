import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map'
import { IDocument } from '../models/document.model';

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    private documentUrl = '/api/documents';  // URL to web API
    private allDocuments: IDocument[];
    public documents: IDocument[];
    public query = new FormControl();

    constructor(private http: Http) {
        this.documents = [];
    }

    ngOnInit() {
        this.getDocuments();
        this.initSearch();
    }

    private getDocuments () {
        return this.http.get(this.documentUrl)
            .map((res: Response) => {
                var doc = res.json();
                
                return <IDocument[]> doc;
            })
            .toPromise()
            .then(documents => {
                this.allDocuments = documents;
                this.documents = documents;
            });
    }

    private initSearch() {
        this.query.valueChanges
            .debounceTime(200)
            .subscribe(newValue => {
                this.documents = this.allDocuments.filter(d => {
                    return d.name.toLowerCase().trim().includes(newValue.toLowerCase().trim());
                });
            });
    }
}
