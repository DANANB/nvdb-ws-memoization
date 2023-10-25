module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': 0,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
}
