module.exports = {
    root: true,
    extends: [
        'universe/native',
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@cspell/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: './tsconfig.json',
            node: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'import/no-named-as-default': 0,
        'react/prop-types': 'off',
        semi: ['error', 'always'],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    { pattern: 'react', group: 'external', position: 'before' },
                    { pattern: 'react-native', group: 'external', position: 'before' },
                    { pattern: 'react-native/**', group: 'external', position: 'before' },
                ],
                pathGroupsExcludedImportTypes: [],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                distinctGroup: false,
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
