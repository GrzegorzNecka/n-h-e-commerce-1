## Project created in envirolment

- System:
  - OS: Windows 10 10.0.19043
- Binaries:
  - node: 18.17.0;
  - pnpm: 8.6.12
  - git: 2.31.1.windows.1
- Browsers:
  - Brave

## Features

### i18n

- [internationalization Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router-client-components)
- [example](https://github.com/amannn/next-intl/tree/main/examples/example-next-13)

## Git methodology: Git Flow

### Flow

[like atomic design](https://atomicdesign.bradfrost.com)

#### Short description:

Base - komponenty uniwersalne, uzywane w całym projekcie, nie majace zadnej wiedzy o logice biznesowej. Takie building blocki apki: buttony, inputy, bazowy modal, jakies tagi, badge, dropdowny
Modules - folder podzielony na podfoldery stron / jakichs "modulow" aplikacji (np. mozesz zrobic moduł map i tam wrzucac wszystkie map-specific componenty, albo moduł offer-wizard i tam wrzucac komponenty ktorych uzywasz tylko w offer-wizardzie). Sa tam komponenty, wystepujace tylko na danej stronie lub w obrebie jakiegos modulu
layouts - folder na layouty
templates - cale strony, ale bez danych. W domysle cale dane do templatki maja pochodzic z propsów albo ew. z jakiegos contextu
pages - komponenty stron, w których renderujesz templatke i przekazujesz do niej dane. W pages tez odbywa sie wiekszosc, a w miare mozliwosci cala logika biznesowa strony

### Branch Names

- main – Production version of the application. For this branch, we will merge only those changes that have already been released to production and critical hotfixes.
- develop – This branch is the "unofficial" main when working on a release. From this branch developers create their working branches and merge (rebase) their work to it. When the work on all functionalities in a given release is ready, this branch is merged to the "release" branch.
- feature/title – On these branches we work every day and create new functionalities.

### Commit Prefixes

- feat(feature): ...
- fix(bug fix): ...
- docs(documentation): ...
- style(formatting, missing semicolons): ...
- refactor: ...
- test(when adding missing tests): ...

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## other

https://lms.hyperfunctor.com/courses
https://www.youtube.com/watch?v=9iRAVASqW5g&t=295s
