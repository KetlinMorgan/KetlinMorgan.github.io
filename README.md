npx create-nx-workspace@latest plantural --preset=angular-monorepo
cd plantural
npm run nx -- add @ngrx/store@latest
npm run nx -- add @ngrx/effects@latest
npm run nx -- add @ngrx/component-store@latest
npm run nx -- add @ngrx/store-devtools@latest

npx nx g @nx/angular:library --directory=libs/main/preview --standalone
npx nx g @nx/angular:library --directory=libs/shared/common --standalone
