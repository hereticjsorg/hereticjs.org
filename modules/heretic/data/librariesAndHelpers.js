export default [{
        type: "header",
        level: 1,
        content: "Libraries and Helpers",
    },
    {
        type: "paragraph",
        content: `Heretic provides several built-in libraries and helpers for you.`,
    },
    {
        type: "header",
        level: 2,
        content: "Fastify Globals",
    },
    {
        type: "list",
        content: [`Access both main configuration files (system.js and website.js) using the Fastify decorations: fastify.systemConfig, fastify.siteConfig:`],
    },
    {
        type: "code",
        language: "js",
        content: `console.log(fastify.systemConfig.server.ip);`,
    },
    {
        type: "list",
        content: [`Access Redis instance (when enabled) using fastify.redis`, `Access MongoDB instance (when enabled) using fastify.mongo`, `Access languages object using fastify.languages (this returns key-value pairs from ./site/etc/languages.json)`, `Access navigation data using fastify.navigation (this returns ./site/etc/navigation.json)`],
    },
];
