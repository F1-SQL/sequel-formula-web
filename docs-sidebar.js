/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/**
 * @param {string} title
 * @returns {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarItemHtml}
 */
const unavailable = title => ({
  type: 'html',
  value: title,
  className: 'menu__link menu__link--unavailable',
  defaultStyle: true,
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'welcome',
    'race-calendar/upcoming-races',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [        
        'getting-started/getting-started',
        'getting-started/database-restore',        
      ],
    },
    {
      type: 'category',
      label: 'Querying the database',
      collapsible: false,
      items: [        
        'querying-the-database/database-schema',       
        {
          type: 'category',
          label: 'Tables',
          link: {
            type: 'doc',
            id: 'tables/index',
          },
          collapsed: true,
          items: [
            'tables/circuitTypes',
            'tables/circuitDirection',
            'tables/circuits',
            'tables/constructorResults',
            'tables/constructors',
            'tables/constructorStandings',
            'tables/countries',
            'tables/drivers',
            'tables/driverNumbers',
            'tables/driverStandings',
            'tables/locations',
            'tables/lapTimes',
            'tables/nationalities',
            'tables/positionText',
            'tables/pitStops',
            'tables/qualifying',
            'tables/races',
            'tables/results',
            'tables/seasons',
            'tables/sprintResults',
            'tables/status',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Example Queries',
      link: {
        type: 'doc',
        id: 'tables/index',
      },
      collapsed: true,
      items: [
        'querying-the-database/example-queries/results',
        'querying-the-database/example-queries/latest-result',        
      ],
    },
    {
      type: 'category',
      label: 'About The Project',
      collapsible: false,
      items: [        
        'about/database-creation',
        'about/versioning',
        'about/database-stats',
        'about/sources',
        'about/supported-versions',       
      ],
    },
    {
      type: 'category',
      label: 'Help & Support',
      collapsible: false,
      items: [        
        'help-support/faq',
        'help-support/known-issues',
        'help-support/contact',        
      ],
    },
  ],
};
module.exports = sidebars;
