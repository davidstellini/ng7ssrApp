import * as functions from 'firebase-functions';

export const universal = functions.https.onRequest((request, response) => {
  require(`${process.cwd()}/dist/ssrApp-webpack/server`).app(request, response);
});
