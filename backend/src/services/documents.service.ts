import {Document} from "../models/document";
import {IDocumentsRepository} from "../repositories/documents.repository";

export interface IDocumentsService {
    GetDocuments(): Promise<Document[]>;
    Add(document) : Promise<void>;
}

export class DocumentsService implements IDocumentsService{
    constructor(private documentRepository: IDocumentsRepository){
    }

    public Add = (document: Document) => {
        return this.documentRepository.Add(document);
    };

    public GetDocuments = () => {
        return this.documentRepository.GetDocuments();
    };
}