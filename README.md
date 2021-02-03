# govuk-frontend-react

A thin React shim on top of [govuk-frontend](https://github.com/alphagov/govuk-frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
npm i govuk-frontend-react
```

Also add the peer dependencies if not already installed

```sh
npm i govuk-frontend react react-dom
```

## Usage

Make sure you import the styles somewhere global

```scss
@import '~govuk-frontend-react/index';
```

Then import components like so

```ts
import { Tag } from 'govuk-frontend-react';
```

## Development

### Testing

```
npm run cypress:run
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

### Generating New Components

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../govuk-frontend-react
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "govuk-frontend-react": "file:../govuk-frontend-react",
    ...
  },
  ...
```

Your components can then be imported and used in that project.
