import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
      // ✅ ADD THIS SECTION
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

       // THIS LINE ALLOWS YOU TO USE 'any' WITHOUT ERRORS
      '@typescript-eslint/no-explicit-any': 'off',
      // 1. Allow 'let' even if the variable isn't reassigned
      'prefer-const': 'off',

      // 2. Allow unused variables (like 'err' in catch blocks)
      '@typescript-eslint/no-unused-vars': 'off',
      
      // 3. Specifically allow unused 'vars' but you can also ignore those starting with _
      'no-unused-vars': 'off',
    },
  },
])
