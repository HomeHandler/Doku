export interface IDocument {
    Id: string;
    Name: string;
    Keywords: string[];
    Added: Date;
    Expires?: Date;
}