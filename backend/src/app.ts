import * as express from "express";
import * as bodyParser from "body-parser";
import { DocumentsController } from "./controllers/documents.controller";
import * as cors from "cors";
import { DocumentsService } from "./services/documents.service";
import { DocumentsMongoRepository } from "./repositories/documents.repository";
import * as mongoose from "mongoose";

// Bootstrap express application
let app = express();

// Default configuration data
let config = {
    port: 3000,
    mongoUrl: "mongodb://127.0.0.1:27017/doku",
    cors: {
        origin: [
            "http://localhost:4200"
        ],
        methods: [
            "GET",
            "POST"
        ]
    }
};

// Start app
main();

function main() {
    // set mongoose promise to es6 promise
    (<any>mongoose).Promise = Promise;

    app.use(cors(config.cors));
    app.use(bodyParser.json());

    // initialize documents
    let documentRepo = new DocumentsMongoRepository(config.mongoUrl);
    let documentService = new DocumentsService(documentRepo);
    app.use("/documents", new DocumentsController(documentService).Router);

    // last but not least add ErrorHandlerMiddleware. This should be added LAST!
    //app.use(ErrorHandlerMiddleware());
    // start listening for requests
    app.listen(config.port, function () {
        console.log(`Application app listening on port ${config.port}!`);
    });
}

export default app;