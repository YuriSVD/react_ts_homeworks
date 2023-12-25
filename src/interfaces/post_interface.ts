import {futimes} from "node:fs";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}