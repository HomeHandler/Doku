import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {FormControl} from '@angular/forms';

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
export class ListComponent implements OnInit {
    private heroesUrl = 'http://localhost:3000/documents';  // URL to web API
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

    private getDocuments = () => {
        return this.http.get(this.heroesUrl)
            .map<IDocument[]>((res: Response) => {
                return res.json();
            })
            .toPromise()
            .then(documents => {
                this.allDocuments = documents;
                this.documents = documents;
            });
    };

    private initSearch = () => {
        this.query.valueChanges
            .debounceTime(200)
            .subscribe(newValue => {
                this.documents = this.allDocuments.filter(d =>{
                    return d.Name.toLowerCase().trim().includes(newValue.toLowerCase().trim());
                })
            });
    }
}