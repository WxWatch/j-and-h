import * as Koa from 'koa';

export interface BaseAPI {
    registerAPI(app: Koa): void
}