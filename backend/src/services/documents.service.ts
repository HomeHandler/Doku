import {Document} from "../models/document";
import {IDocumentsRepository} from "../repositories/documents.repository";
import {Promise} from "es6-promise";

export interface IDocumentsService {
    GetDocuments(): Promise<Document[]>;
    Add(document) : Promise<void>;
}

export class DocumentsService implements IDocumentsService{
    constructor(private documentRepository: IDocumentsRepository){
    }

    Add = (document: Document) => {
        return this.documentRepository.Add(document);
    };

    GetDocuments = (): Promise<Document[]> => {
        return this.documentRepository.GetDocuments();
    };
}