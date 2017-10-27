import { Component, OnInit } from '@angular/core';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import '../rxjs-operators';
import { IDocument } from '../models/document.model';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup } from "@angular/forms";
import { Http } from "@angular/http";

interface IDocumentCreateModel {
    name?: string;
    keywords: string[];
    expires?: Date;
}

@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
}) 
export class EditComponent implements OnInit {
    constructor(private http: Http) { }

    loading: boolean = false;
    separatorKeysCodes = [ENTER, SPACE];

    document: IDocumentCreateModel;

    ngOnInit() {
        this.document = {
            keywords: []
        };
    }

    addKeyword(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our person
        if ((value || '').trim()) {
            this.document.keywords.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    removeKeyword(tag: string): void {
        let index = this.document.keywords.indexOf(tag);

        if (index >= 0) {
            this.document.keywords.splice(index, 1);
        }
    }

    createDocument(createForm: FormGroup): void {
        if (createForm.invalid) {
            return;
        }

        this.loading = true;

        const createModel = {
            name: this.document.name,
            keywords: this.document.keywords,
            expires: this.document.expires
        };

        this.http.post("/api/documents", createModel)
            .subscribe(
                data => {
                    console.log("zsir!");
                },
                error => {
                    console.error(":(");
                },
                () =>{
                    this.loading = false;
                }
            )
    }
}