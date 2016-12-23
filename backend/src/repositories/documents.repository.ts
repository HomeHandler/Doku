import {Document} from "../models/document";
import {IDocumentModel, DocumentModel} from "./document.model";
import * as mongoose from "mongoose";

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

    public Add = (document: Document) => {
        return DocumentModel.create({
            name: document.Name,
            expires: document.Expires,
            added: document.Added
        });
    };

    public GetDocuments = async (): Promise<Document[]> =>{
        let documentModels = await DocumentModel.find({});

        return documentModels.map(documentModel => {
            return {
                Id: documentModel._id,
                Name: documentModel.name,
                Expires: documentModel.expires,
                Added: documentModel.added
            };
        });
    };
}