# Template for Next.js App

The template is based on [TypeScript](https://www.typescriptlang.org/) and [Next.js](https://nextjs.org/) and includes:

- Setting the `env` variables by creating the file` env.${development | stage | production}`
- Proxy settings (edited in the file [`src/server.ts`](https://github.com/shashkovdanil/next-template/blob/master/src/server.ts#L16))
- CSS Modules with [PostCSS](https://postcss.org/) for styling
- ESLint (create-react-app config), Prettier, Stylelint
- Git hooks (husky with lint-staged)
- Aliases for `src/*` directories

## Usage

```sh
npx degit shashkovdanil/next-template my-nextjs-project

yarn

yarn start:dev
```

## Production

```sh
yarn build:prod # build production bundle
yarn start:prod # start server
```
