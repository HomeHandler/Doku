import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { IDocument } from "../models";
import { Http, Response } from "@angular/http";
import 'rxjs'

const DOCUMENTS_URL = '/api/documents';

export class DocumentsDataSource extends DataSource<any>{
    constructor(private http: Http) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<IDocument[]> {
        return this.http.get(DOCUMENTS_URL)
            .map((response: Response) => {
                return response.json() as IDocument[];
            });
    }
    
    disconnect(collectionViewer: CollectionViewer): void {
    }

    _filterChange = new BehaviorSubject('');

    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }
}