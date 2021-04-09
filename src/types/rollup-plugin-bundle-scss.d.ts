declare module 'rollup-plugin-bundle-scss' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { Plugin } from 'rollup';

  export default function bundleScss(options: {
    // where to output bundled SCSS file
    output: string;

    // Whether SCSS file is exclusive to rollup-plugin-bundle-scss.
    // Default value: true
    // Set it to false when there're other plugin to handle SCSS file after bundleScss()
    exclusive: boolean;

    // bundlerOptions will be passed into `scss-bundle` package,
    // see document here https://github.com/reactway/scss-bundle
    bundlerOptions: {
      // If tilde import is used, `project` is required for finding `node_modules`
      project: string;
      dedupeGlobs: string[];
      includePaths: string[];
      ignoreImports: string[];
    };
  }): Plugin;
}
