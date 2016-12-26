import * as mongoose from "mongoose";

export interface IDocumentModel extends mongoose.Document {
    name: string;
    expires: Date;
    added: Date;
    keywords: string[];
}

export const DocumentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    expires: {type: Date, required: false},
    added: {type: Date, required: true},
    keywords: {type: Array, required: true},
});

export const DocumentModel = mongoose.model<IDocumentModel>("Document", DocumentSchema);