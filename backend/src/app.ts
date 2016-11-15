import * as express from "express";
import * as bodyParser from "body-parser";
import {DocumentsApi} from "./api/documents.api";
import * as cors from "cors";

// Bootstrap express application
let app = express();

// Default configuration data
let config = {
    port: 3000,
    cors: {
        origin: [
            "http://localhost:8080"
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
    // Turn on CORS to support client requests from foreign domains
    app.use(cors(config.cors));
    // Add json body parser to pipeline
    app.use(bodyParser.json());
    // attach users api to /users endpoint
    app.use("/documents", DocumentsApi());
    // attach occupations api to /occupations endpoint
    //app.use("/occupations", OccupationsApi());
    // last but not least add ErrorHandlerMiddleware. This should be added LAST!
    //app.use(ErrorHandlerMiddleware());
    // start listening for requests
    app.listen(config.port, function () {
        console.log(`Application app listening on port ${config.port}!`);
    });
}

export default app;