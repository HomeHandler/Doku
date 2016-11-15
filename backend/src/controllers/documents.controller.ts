import {Router, Request, Response} from "express";
import {Document} from "../models/document";
import {IDocumentsService} from "../services/documents.service";

export class DocumentsController {
    private router: any;

    public get Router(): any {
        return this.router;
    };

    constructor(private documentService: IDocumentsService) {
        this.router = Router();

        this.router.get("/", this.GetDocuments);
        this.router.get("/add/:name", this.AddDocument);
    }

    private GetDocuments = (request: Request, response: Response) => {
        this.documentService.GetDocuments().then(documents => {
            response.json(documents);
        });
    };

    private AddDocument = (request: Request, response: Response) => {
        let document: Document = {
            Id: null,
            Expires: null,
            Name: request.params.name.toString(),
            Added: new Date()
        };

        this.documentService.Add(document).then(() => {
            response.sendStatus(200);
        });
    };
}

