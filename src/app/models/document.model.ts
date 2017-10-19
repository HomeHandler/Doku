export interface IDocument {
    id: string;
    name: string;
    keywords: string[];
    added: Date;
    expires?: Date;
}