// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const defaultOptions = {
  editUrl: 'https://github.com/Sequel-Formula/sequel-formula-web/tree/master/',
};

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Sequel Formula',
  tagline: 'A SQL Server Formula 1 Database',
  url: 'https://sequel-formula.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./docs-sidebar.js'),
          ...defaultOptions,
        },
        blog: {
          ...defaultOptions,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sequel Formula',        
        items: [
          {
            to: '/',
            // never render as active
            activeBaseRegex: '^$',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'welcome',
            label: 'Documentation',
            position: 'left',
          },                 
          {
            href: 'https://github.com/Sequel-Formula',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/Sequel-Formula',
          },
          {
            label: 'Website Source',
            href: 'https://github.com/Sequel-Formula/sequel-formula-web',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sequel Formula. Built with Docusaurus. Although we try and keep the data on this website correct and up to date, we do not state that it always is. The use of this data is at your own risk. This webstie is in no way affiliated with Formula 1 companies. F1, Formula One, Formula 1, FIA and related trademarks are trademarks of Formula One Licensing B.V`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['nginx'],
      },
    }),
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexPages: false,
        language: 'en',
        style: undefined,
        maxSearchResults: 8,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,

          b: 0.75,

          k1: 1.2,

          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
  ],
};
