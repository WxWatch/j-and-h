import * as Koa from 'koa';

import { RecipesAPI } from './recipes/api';

const app = new Koa();

new RecipesAPI().registerAPI(app);

app.listen(3000);
