import * as mongoose from "mongoose";

export interface IDocumentModel extends mongoose.Document {
    name: string;
}

export const DocumentSchema = new mongoose.Schema({
    name: {type: String, required: true},
});

export const DocumentModel = mongoose.model<IDocumentModel>("Document", DocumentSchema);