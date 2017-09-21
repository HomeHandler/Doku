import { Router, Request, Response } from "express";
import { Document } from "../models/document";
import { IDocumentsService } from "../services/documents.service";

export class DocumentsController {
    private router: any;

    public get Router(): any {
        return this.router;
    }

    constructor(private documentService: IDocumentsService) {
        this.router = Router();

        this.router.get("/", this.GetDocuments);
        this.router.get("/add/:name", this.AddDocument);
    }

    private GetDocuments = async (request: Request, response: Response) => {
        let documents = await this.documentService.GetDocuments();

        response.json(documents);
    };

    private AddDocument = async (request: Request, response: Response) => {
        let document: Document = {
            Id: null,
            Expires: null,
            Name: request.params.name.toString(),
            Keywords: ['abc'],//request.params.keywords,
            Added: new Date()
        };

        await this.documentService.Add(document);

        response.sendStatus(200);
    };
}

