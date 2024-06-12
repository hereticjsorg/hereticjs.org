export default [{
        type: "header",
        level: 1,
        content: "API Modules",
    },
    {
        type: "paragraph",
        content: "In order to extend your website functionality and be able to interact with server-side functions, you may use the API Modules functionality.",
    },
    {
        type: "paragraph",
        content: "The only mandatory file is index.js which shall be used to specify API routes. According to the Heretic style guide, each API route URL shall start with /api.",
    },
    {
        type: "paragraph",
        content: "Example (./site/auth/api/index.js):",
    },
    {
        type: "code",
        language: "js",
        content: `import apiSomething from "./apiSomething";\n\nexport default fastify => {\n    fastify.post("/api/something", apiSomething());\n};`,
    },
    {
        type: "paragraph",
        content: "Each route must be separated to a different file which will export a fastify handler function:",
    },
    {
        type: "code",
        language: "js",
        content: `export default () => ({\n    async handler(req, rep) {\n        return rep.code(200).send({});\n    }\n});`,
    },
    {
        type: "paragraph",
        content: "Each file may have Validation and Serialization settings, rate limit settings etc.",
    },
    {
        type: "paragraph",
        content: "To define specific rate limit settings, you will need to use the following syntax:",
    },
    {
        type: "code",
        language: "js",
        content: `export default () => ({\n    rateLimit: {\n        max: 10,\n        ban: 50,\n        timeWindow: 10000\n    },\n    async handler(req, rep) {\n        return rep.code(200).send({});\n    }\n});`,
    },
];
