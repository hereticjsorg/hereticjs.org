export default [{
        type: "header",
        level: 1,
        content: "Rate Limiting",
    },
    {
        type: "paragraph",
        content: "Heretic allows you to use rate limits. This helps protect your website from various denial-of-service attacks and helps you to limit access for specified IPs.",
    },
    {
        type: "paragraph",
        content: "In order to enable rate limits, you will need to install Redis server in addition to the base Heretic requirements. Then, please specify rate limit configuration in your system.js file.",
    },
    {
        type: "paragraph",
        content: "When rate limits are reached, internal server error occurs. This triggers a 429 HTTP error, the Internal Server Error page is displayed (using a different error message: Rate Limit Exceeded).",
    },
    {
        type: "header",
        level: 2,
        content: "Configuration",
    },
    {
        type: "paragraph",
        content: "First, you will need to enable rate limiting by setting the enabled option to true.",
    },
    {
        type: "paragraph",
        content: "There are global options which are affecting every module (and even static resource) of your site:",
    },
    {
        type: "table",
        content: [{
            option: "timeWindow",
            description: "Time period (in milliseconds); in case a client reaches the maximum number of allowed requests in this time period, a 429 error is generated",
        }, {
            option: "max",
            description: "Request limit until client gets temporary restricted",
        }, {
            option: "ban",
            description: "Request limit until client gets banned",
        }],
    },
    {
        type: "paragraph",
        content: "Additionally, you may wish to define blacklists and whitelists (arrays of string); add headers to the response).",
    },
];
