import {Document} from "../models/document";
import {DocumentModel} from "./document.model";
import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

export interface IDocumentsRepository {
    GetDocuments(): Promise<Document[]>;
    Add(document: Document): Promise<void>;
}

export class DocumentsMongoRepository implements IDocumentsRepository {
    constructor(mongoUrl: string) {
        mongoose.connect(mongoUrl, (error: any) => {
            if (error) {
                console.log(error);
            }
        });
    }

    Add = (document: Document) => {
        return DocumentModel.create({
            name: document.Name
        });
    };

    GetDocuments = (): Promise<Document[]> => {
        return DocumentModel.find({}).then(res => {
            return res.map(d => <Document>{
                Name: d.name
            });
        });
    };
}