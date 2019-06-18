import * as Koa from 'koa';
import * as Router from 'koa-router';

import { BaseAPI } from '../api'
import { create } from 'domain';

const router = new Router({
    prefix: '/recipes'
});

// :(

export class RecipesAPI implements BaseAPI {
    registerAPI(app: Koa): void {
        // Simple one
        router.get('/hello', this.list)

        app.use(router.routes());
    }

    list(ctx: Koa.ParameterizedContext, next: () => Promise<any>): void {
        ctx.body = [
            {
                name: 'taco'
            },
            {
                name: 'burrito'
            }
        ];
        next();
    }

    get(ctx: Koa.ParameterizedContext, next: () => Promise<any>): void {
        next();
    }

    create(ctx: Koa.ParameterizedContext, next: () => Promise<any>): void {
        next();
    }

    update(ctx: Koa.ParameterizedContext, next: () => Promise<any>): void {
        next();
    }

    delete(ctx: Koa.ParameterizedContext, next: () => Promise<any>): void {
        next();
    }
}