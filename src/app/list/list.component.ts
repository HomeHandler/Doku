import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { IDocument } from '../models/document.model';
import { DocumentsDataSource } from './documents-data-source';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    private documentUrl = '/api/documents';  // URL to web API

    public documentsSource: DocumentsDataSource;
    public query = new FormControl();
    public displayedColumns = ['id', 'name', 'keywords', 'added', 'expires'];

    constructor(private http: Http) {
        
    }

    ngOnInit() {
        this.documentsSource = new DocumentsDataSource(this.http);
        //this.documentsSource.filter = "";
        //this.getDocuments();
        //this.initSearch();
    }

    // private getDocuments() {
    //     return this.http.get(this.documentUrl)
    //         .map((res: Response) => {
    //             var doc = res.json();

    //             return <IDocument[]>doc;
    //         })
    //         .toPromise()
    //         .then(documents => {
    //             this.documents = documents;
    //         });
    // }

    // private initSearch() {
    //     this.query.valueChanges
    //         .debounceTime(200)
    //         .subscribe(newValue => {
    //             this.documents = this.allDocuments.filter(d => {
    //                 return d.name.toLowerCase().trim().includes(newValue.toLowerCase().trim());
    //             });
    //         });
    // }
}
