import {Component, OnInit} from '@angular/core';
import {ENTER} from '@angular/cdk/keycodes';
import '../rxjs-operators';
import {IDocument} from '../models/document';
import {MatChipInputEvent} from '@angular/material';

export interface Person {
    name: string;
  }

const COMMA = 188;

@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    constructor() {}

    removable: boolean = true;
    selectedPeople = null;
    
    people: Person[] = []

    separatorKeysCodes = [ENTER, COMMA, 186];
    
    ngOnInit() {
    }

    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our person
        if ((value || '').trim()) {
            this.people.push({ name: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(person: Person): void {
        let index = this.people.indexOf(person);

        if (index >= 0) {
            this.people.splice(index, 1);
        }
    }
}