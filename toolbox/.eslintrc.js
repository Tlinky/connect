module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    process: true,
    __DEV__: true,
    YS: true,
    fis: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    // 强制使用一致的缩进
    indent: ['error', 'tab', {SwitchCase: 1}],

    // 禁止空格和tab的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',

    // 强制使用一致的反勾号、双引号或单引号
    quotes: ['off', 'single'],

    // 要求在语句末尾使用分号
    semi: ['error', 'always', {omitLastInOneLineBlock: true}],

    // console.log可用
    'no-console': 'off',

    // 禁止不必要的分号
    'no-extra-semi': 'error',

    // 禁止不必要的括号
    'no-extra-parens': 'warn',

    // 禁止对 function 声明重新赋值
    'no-func-assign': 'warn',

    // 禁止出现未使用过的变量
    'no-unused-vars': 'warn',

    // 禁用未声明的变量
    'no-undef': 'warn',

    // 禁止多次声明同一变量
    'no-redeclare': 'warn',

    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',

    // 要求在数组括号内使用一个或多个空格、或折行
    'array-bracket-spacing': ['warn', 'always', {singleValue: false}],

    // 强制使用骆驼拼写法命名约定
    camelcase: ['warn', {properties: 'never'}],

    // 要求或禁止末尾逗号
    'comma-dangle': ['warn', 'never'],

    // 强制所有控制语句使用大括号，允许在单行中省略
    curly: ['error', 'multi-line'],

    // 强制在代码块中使用一致的大括号风格
    // if (foo) {
    //   bar();
    // } else {
    //   baz();
    // }
    // if (foo) { bar(); }
    'brace-style': ['warn', '1tbs', {allowSingleLine: true}],

    // 禁用with
    'no-with': 'warn',

    // 禁止修改 const 声明的变量
    'no-const-assign': 'warn',

    // 要求箭头函数的参数使用圆括号
    'arrow-parens': ['warn', 'as-needed'],

    'space-infix-ops': 'warn',

    //优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',

    '@typescript-eslint/no-var-requires': 'off',

    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则

    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
  },
};
