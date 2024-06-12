export default [{
        type: "header",
        level: 1,
        content: "Modules",
    },
    {
        type: "paragraph",
        content: "In order to create a module, you will need to create a sub-directory under the ./site/modules directory. You may wish either to start from scratch or to use a template.",
    },
    {
        type: "header",
        level: 2,
        content: "Using Module Template",
    },
    {
        type: "paragraph",
        content: "You will need to copy the ./src/core/defaults/modules/blank directory to the ./site/modules directory. Then:",
    },
    {
        type: "list",
        content: [`Rename the directory to match its contents (e.g. "test", ./site/modules/test)`, `Set module configuration in a ./site/modules/test/module.js (it's mandatory to set the unique page ID and route path)`, `Put the required contents to the ./site/modules/test/page/content/lang-xx-xx directories (matching your languages)`, `When necessary, add your page ID to the ./site/navigation.json file (see configuration files for more info)`],
    },
    {
        type: "header",
        level: 2,
        content: "Module Configuration",
    },
    {
        type: "paragraph",
        content: "Each module is being configured using module.js file which located in module directory.",
    },
    {
        type: "table",
        content: [{
                option: "id",
                description: "Unique ID of a module, used for routes and navigation",
            }, {
                option: "routes.userspace",
                description: `Object of routes for userspace (e.g. { home: { path: "/home" } } )`,
            },
            {
                option: "routes.admin",
                description: `Object of routes for admin area (e.g. { home: { path: "/home" } } )`,
            },
        ],
    },
    {
        type: "paragraph",
        content: "To change locale-specific options, you will need to edit the meta.src.json file located in every page's directory:",
    },
    {
        type: "table",
        content: [{
                option: "title",
                description: "Object containing page title for each language",
            }, {
                option: "description",
                description: `Object containing page description for each language`,
            },
        ],
    },
    {
        type: "paragraph",
        content: "Additionally, you may wish to tell Heretic build script to include a page into sitemap.xml file which is built automatically. To change sitemap options for each page, you will need to edit the sitemap.json file:",
    },
    {
        type: "table",
        content: [{
                option: "include",
                description: "Include page into sitemap (true or false)",
            }, {
                option: "lastmod",
                description: `Include last modified date into sitemap (true or false)`,
            },
            {
                option: "changefreq",
                description: `Set the change frequency (refer to sitemap format docs)`,
            },
            {
                option: "priority",
                description: `Set the page priority (refer to sitemap format docs)`,
            },
        ],
    },
];
