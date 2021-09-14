module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    rules: {
        'react/no-unescaped-entities': [
            'error',
            {
                forbid: [
                    {
                        char: '>',
                        alternatives: ['&gt;'],
                    },
                    {
                        char: '}',
                        alternatives: ['&#125;'],
                    },
                ],
            },
        ],
    },
};
