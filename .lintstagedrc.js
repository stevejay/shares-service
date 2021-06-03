module.exports = {
  '**/*.ts?(x)': [
    () => 'tsc -p tsconfig.json --noEmit',
    'eslint --max-warnings 0',
    'prettier --write --ignore-path .gitignore',
  ],
  '*.graphql': ['graphql-schema-linter src/**/*.graphql'],
};
