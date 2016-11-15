import {Router, Request, Response} from "express";
import {Document} from "../models/document";

export function DocumentsApi() {
    let router = Router();
    let id = 1;
    let documents = [];

    // endpoint to process data posted by user
    router.get("/", (request: Request, response: Response) => {
        response.json(documents);
    });

    router.get("/add/:name", (request: Request, response: Response) => {
        let document: Document = {
            Id: (id++).toString(),
            Expires: null,
            Name: request.params.name.toString(),
            Added: new Date()
        };

        documents.push(document);

        response.json("ok");
    });

    return router;
}

