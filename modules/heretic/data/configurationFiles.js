export default [{
        type: "header",
        level: 1,
        content: "Configuration Files",
    },
    {
        type: "paragraph",
        content: "There are several configuration files available so you may adjust many parameters related to your website.",
    },
    {
        type: "header",
        level: 2,
        content: "site/etc/system.js",
    },
    {
        type: "paragraph",
        content: "This configuration file contains main options related to your web server (IP, ports, logging etc.).",
    },
    {
        type: "header",
        level: 3,
        content: "id",
    },
    {
        type: "paragraph",
        content: "Unique website ID. This ID is used for cookies, websockets etc.",
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `id: "heretic"`,
    }, {
        type: "header",
        level: 3,
        content: "secret",
    },
    {
        type: "paragraph",
        content: "Secret key used for internal security purposes, e.g. to encrypt session keys or to salt database records.",
    },
    {
        type: "paragraph",
        content: "Normally it's being imported from a js file called secure.js, but you can put any value here.",
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `secret: secure.secret`,
    },
    {
        type: "header",
        level: 3,
        content: "hashMethod",
    },
    {
        type: "paragraph",
        content: "Define the way you database passwords will be stored. Currently there are to options available: argon2 or crypto (crypto.scrypt):",
    },
    {
        type: "code",
        language: "js",
        content: `hashMethod: "argon2"`,
    },
    {
        type: "header",
        level: 3,
        content: "server",
    },
    {
        type: "paragraph",
        content: "Define the options to run the build-in Web server based on Fastify:",
    },
    {
        type: "table",
        content: [{
                option: "ip",
                description: "IP address your server should listen to (use 0.0.0.0 to listen to all interfaces)",
            }, {
                option: "port",
                description: "Port on which Fastify is listening to",
            },
            {
                option: "static",
                description: "Serve static content using internal server (disable for production)",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `server: {\n    ip: "0.0.0.0",\n    port: 3001,\n    static: true,\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "auth",
    },
    {
        type: "paragraph",
        content: "Set different options related to the authentication process:",
    },
    {
        type: "table",
        content: [{
                option: "admin",
                description: "Should the admin panel be enabled (works only if MongoDb is enabled)",
            }, {
                option: "signIn",
                description: "Is sign in allowed (the existing users are allowed to authenticate)",
            },
            {
                option: "signUp",
                description: "Is sign up allowed (new users are allowed to register)",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `auth: {\n    admin: true,\n    signIn: true,\n    signUp: true\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "mongo",
    },
    {
        type: "paragraph",
        content: "Heretic has an option to use MongoDB as a database backend. The options are as following:",
    },
    {
        type: "table",
        content: [{
                option: "enabled",
                description: "Should the MongoDB feature be enabled?",
            }, {
                option: "url",
                description: "Define MongoDB connection URL",
            },
            {
                option: "dbName",
                description: "Define database name",
            },
            {
                option: "options",
                description: "Define MongoDB connection options",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `mongoption: {\n    enabled: true,\n    url: "mongodb://127.0.0.1:27017",\n    dbName: "heretic",\n    options: {\n        connectTimeoutMS: 5000,\n    },\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "redis",
    },
    {
        type: "paragraph",
        content: "Heretic has an option to use Redis for internal purposes. The options are as following:",
    },
    {
        type: "table",
        content: [{
                option: "enabled",
                description: "Should the Redis feature be enabled?",
            },
            {
                option: "host",
                description: "Define Redis Server host",
            },
            {
                option: "port",
                description: "Define Redis Server port",
            },
            {
                option: "connectTimeout",
                description: "Connection time-out",
            },
            {
                option: "maxRetriesPerRequest",
                description: "Number of maximum retries per request",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `redis: {\n    enabled: false,\n    host: "127.0.0.1",\n    port: 6379\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "email",
    },
    {
        type: "paragraph",
        content: "Set your e-mail configuration here. Heretic uses Nodemailer under the hood to send mails.",
    },
    {
        type: "paragraph",
        content: "Configuration options:",
    },
    {
        type: "table",
        content: [{
                option: "enabled",
                description: "Is mail sending allowed?",
            },
            {
                option: "from",
                description: "Which from address should be used to send mails",
            },
            {
                option: "config",
                description: "Nodemailer transporter configuration object",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `email: {\n    enabled: false,\n    from: "noreply@hereticjs.org",\n    config: {\n        host: "smtp.example.com",\n          port: 587,\n          secure: false,\n          auth: {\n            user: "username",\n            pass: "password",\n          }\n    }\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "webSockets",
    },
    {
        type: "paragraph",
        content: "Configuration for internal web sockets transport.",
    },
    {
        type: "table",
        content: [{
                option: "enabled",
                description: "Are websockets supported?",
            },
            {
                option: "url",
                description: "Web socket URL for frontend connections",
            },
            {
                option: "options",
                description: "Web socket options",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `webSockets: {\n    enabled: true,\n    url: "ws://127.0.0.1:3001/ws",\n    options: {\n        maxPayload: 1048576,\n    }\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "token",
    },
    {
        type: "paragraph",
        content: "Configuration of JWT (tokens):",
    },
    {
        type: "table",
        content: [{
                option: "expiresIn",
                description: "Token time-to-live (in seconds)",
            },
            {
                option: "ip",
                description: "Bind token to client IP address",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `const {\n    parse,\n} = require("@lukeed/ms");\n\ntoken: {\n    expiresIn: parseInt(parse("7 days") / 1000, 10),\n    ip: false\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "passwordPolicy",
    },
    {
        type: "paragraph",
        content: "Define password policy for users (takes effect on sign up and other password-related procedures).",
    },
    {
        type: "paragraph",
        content: "Options:",
    },
    {
        type: "table",
        content: [{
                option: "minLength",
                description: "Minimum password length (set null to disable)",
            },
            {
                option: "maxLength",
                description: "Maximum password length (set null to disable)",
            },
            {
                option: "uppercase",
                description: "Should contain uppercase characters",
            },
            {
                option: "lowercase",
                description: "Should contain lowercase characters",
            },
            {
                option: "numbers",
                description: "Should contain numbers",
            },
            {
                option: "special",
                description: "Should contain special characters",
            },
            {
                option: "minGroups",
                description: "A number of groups required (e.g. 2 means that a password should contain either numbers and uppercase characters, or lowercase and uppercase characters etc.)",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `passwordPolicy: {\n    minLength: 8,\n    maxLength: null,\n    minGroups: 2,\n    uppercase: true,\n    lowercase: true,\n    numbers: true,\n    special: true,\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "oauth2",
    },
    {
        type: "paragraph",
        content: "A list of available OAuth2 providers for the current site. Heretic is using @fastify/oauth2 under the hood.",
    },
    {
        type: "paragraph",
        content: "The following providers are supported for Heretic now:",
    },
    {
        type: "paragraph",
        content: "<strong>Google</strong>",
    },
    {
        type: "paragraph",
        content: "Configuration data:",
    },
    {
        type: "table",
        content: [{
                option: "enabled",
                description: "Is this authentication method enabled?",
            },
            {
                option: "name",
                description: "Method name (should start with oa2)",
            },
            {
                option: "scope",
                description: "A list of requested scopes (should contain email as this is required for the workflow)",
            },
            {
                option: "credentials.client",
                description: "Define ID and secret of oauth provider",
            },
            {
                option: "credentials.auth",
                description: "Redirect path to start the authentication workflow",
            },
            {
                option: "callbackUri",
                description: "Callback URL",
            },
            {
                option: "callbackPath",
                description: "Callback path",
            },
            {
                option: "icon",
                description: "SVG path for the icon displayed on the sign in / sign up pages",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `oauth2: [{\n    enabled: false,\n    name: "oa2google",\n    scope: ["profile", "email"],\n    credentials: {\n        client: {\n            id: "",\n            secret: "",\n        },\n        auth: process.browser ? null : require("@fastify/oauth2").GOOGLE_CONFIGURATION,\n    },\n    startRedirectPath: "/oauth2/google",\n    callbackUri: "https://demo.hereticjs.org/oauth2/google/callback",\n    callbackPath: "/oauth2/google/callback",\n    icon: "M488 261.8C488 403.3 391.1 ...",\n}]`,
    },
    {
        type: "header",
        level: 3,
        content: "cookieOptions",
    },
    {
        type: "paragraph",
        content: "Define options for cookies.",
    },
    {
        type: "table",
        content: [{
                option: "expires",
                description: "Cookie expiration time (seconds)",
            },
            {
                option: "path",
                description: "Cookie path",
            },
            {
                option: "domain",
                description: "Cookie domain",
            },
            {
                option: "secure",
                description: "Secure cookie flag",
            },
            {
                option: "sameSite",
                description: `Cookie "same site" property`,
            },
            {
                option: "callbackUri",
                description: "Callback URL",
            },
            {
                option: "callbackPath",
                description: "Callback path",
            },
            {
                option: "icon",
                description: "SVG path for the icon displayed on the sign in / sign up pages",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    expires: 604800,\n    path: "/",\n    domain: ".demo.hereticjs.org",\n    secure: true,\n    sameSite: "strict"\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "log",
    },
    {
        type: "paragraph",
        content: "Define logging settings.",
    },
    {
        type: "paragraph",
        content: "Options:",
    },
    {
        type: "table",
        content: [{
            option: "level",
            description: `Define log level ("trace", "debug", "info", "warn", "error", or "fatal")`,
        }],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `log: {\n  level: "info"\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "rateLimit",
    },
    {
        type: "paragraph",
        content: "Rate limiting protects your website from various denial-of-service attacks and helps you to limit access for specified IPs.",
    },
    {
        type: "paragraph",
        content: "Options:",
    },
    {
        type: "table",
        content: [{
                option: "timeWindow",
                description: `Time period (in milliseconds); in case a client reaches the maximum number of allowed requests in this time period, a 429 error is generated`,
            },
            {
                option: "max",
                description: `Request limit until client gets temporary restricted`,
            },
            {
                option: "ban",
                description: `Request limit until client gets banned`,
            },
            {
                option: "whiteList",
                description: `A whitelist of IP addresses or networks`,
            },
            {
                option: "blackList",
                description: `A whitelist of IP addresses or networks`,
            },
            {
                option: "addHeaders",
                description: `Headers to add`,
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `rateLimit: {\n    enabled: false,\n    ban: false,\n    global: {\n        max: 100,\n        ban: 1000,\n        timeWindow: 10000\n    },\n    whiteList: [],\n    blackList: [],\n    addHeaders: {\n        "x-ratelimit-limit": true,\n        "x-ratelimit-remaining": true,\n        "x-ratelimit-reset": true,\n        "retry-after": true,\n    }\n}`,
    },
    {
        type: "paragraph",
        content: "See rate limiting for further information.",
    },
    {
        type: "header",
        level: 3,
        content: "directories",
    },
    {
        type: "paragraph",
        content: "Define system-wide directories used to store local files.",
    },
    {
        type: "paragraph",
        content: "Options:",
    },
    {
        type: "table",
        content: [{
                option: "tmp",
                description: `A directory to store temporary files (null means to use the system directory, e.g. /tmp)`,
            },
            {
                option: "files",
                description: `A directory to store file uploads`,
            },
        ],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `directories: {\n    tmp: null,\n    files: "files"\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "collections",
    },
    {
        type: "paragraph",
        content: "A list of MongoDB collection names for different system modules.",
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `collections: {\n    users: "users",\n    files: "files",\n    counters: "counters",\n    history: "history",\n    groups: "groups",\n    events: "events",\n    geoNetworks: "geoNetworks",\n    geoCountries: "geoCountries",\n    geoCities: "geoCities",\n    version: "version",\n    sessions: "sessions",\n    activation: "activation",\n    captcha: "captcha"\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "routes",
    },
    {
        type: "paragraph",
        content: "A list routes for different system modules.",
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `routes: {\n    admin: "/admin",\n    signInAdmin: "/admin/signIn",\n    signIn: "/signIn",\n    signOutAdmin: "/admin/signOut",\n    signOut: "/signOut",\n    account: "/account",\n    signUp: "/signUp",\n    restorePassword: "/restorePassword"\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "buildOptions",
    },
    {
        type: "paragraph",
        content: "Options on how to build Heretic from source:",
    },
    {
        type: "table",
        content: [{
            option: "productionCompress",
            description: "Compress compiled website files using gzip compression",
        }],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `buildOptions: {\n    productionCompress: false\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "test",
    },
    {
        type: "paragraph",
        content: "Options for test framework:",
    },
    {
        type: "table",
        content: [{
            option: "headless",
            description: "Run GUI tests in headless mode",
        }, {
            option: "executablePath",
            description: `Chromium executable path (set "auto" to search for a pre-installed Chrome or Chromium)`,
        }, {
            option: "args",
            description: "Arguments to start Chromium with",
        }, {
            option: "defaultViewport",
            description: "Default view port",
        }, {
            option: "devtools",
            description: "Start Chromium with open DevTools",
        }],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `test: {\n    headless: true,\n    executablePath: "auto",\n    args: ["--window-size=1920,1080", "--no-sandbox"],\n    defaultViewport: null,\n    devtools: true\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "heretic",
    },
    {
        type: "paragraph",
        content: "Specify some framework internal settings.",
    },
    {
        type: "table",
        content: [{
            option: "zipball",
            description: "An URL to get the zipball from (used for system updates)",
        }, {
            option: "darkModeEnabled",
            description: "Enable switch to dark mode",
        }],
    },
    {
        type: "paragraph",
        content: "Example:",
    },
    {
        type: "code",
        language: "js",
        content: `heretic: {\n    zipball: "http://github.com/hereticjsorg/heretic/zipball/master/",\n    darkModeEnabled: true\n}`,
    },
    {
        type: "header",
        level: 2,
        content: "site/etc/website.js",
    },
    {
        type: "paragraph",
        content: "This configuration file describes the meta data of your website which is used system-wide.",
    },
    {
        type: "table",
        content: [{
            option: "url",
            description: "Site URL starting with http or https",
        }],
    },
    {
        type: "paragraph",
        content: "Returns the object which should include data from meta.js (see below).",
    },
    {
        type: "header",
        level: 2,
        content: "site/etc/meta.src.js",
    },
    {
        type: "paragraph",
        content: "This configuration file describes the meta data of your website which is used system-wide.",
    },
    {
        type: "table",
        content: [{
                option: "title",
                description: "Site title (specified for each site language individually)",
            },
            {
                option: "shortTitle",
                description: "A shorter version of site title (specified for each site language individually)",
            },
            {
                option: "description",
                description: "Site description (specified for each site language individually)",
            },
        ],
    },
    {
        type: "header",
        level: 2,
        content: "site/etc/languages.js",
    },
    {
        type: "paragraph",
        content: "This configuration file contains a list of languages in the following format:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    "en-us": "English",\n    "ru-ru": "Русский"\n}`,
    },
    {
        type: "header",
        level: 2,
        content: "site/etc/navigation.js",
    },
    {
        type: "paragraph",
        content: "This file is being used as a source to display the top navigation menu on your website (in the default template). Additionally, you've to set the default route ID.",
    },
    {
        type: "paragraph",
        content: `For each area, "userspace" and "admin", you may define a separate list of routes.`,
    },
    {
        type: "paragraph",
        content: "Userspace:",
    },
    {
        type: "table",
        content: [{
                option: "home",
                description: "Home route ID",
            },
            {
                option: "routes",
                description: "Array which contains all routes to display in the navbar",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Admin:",
    },
    {
        type: "table",
        content: [{
            option: "routes",
            d: "Array which contains all routes to display in the navbar<",
        }],
    },
    {
        type: "paragraph",
        content: "Normally, routes options contains an array of strings (each strings indicates a corresponding route ID). If you want to use dropdown menus for routes, you can use the following syntax:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    "home": "sample_home",\n    "routes": [\n        "sample_home",\n        "sample_license",\n        {\n            "id": "parentRouteName_page",\n            "routes": ["childRouteId1_page", "childRouteId2_page", "childRouteId3_page"]\n        }\n    ]\n}`,
    },
    {
        type: "paragraph",
        content: "You will need to add a translation for parentRouteName to your user translation dictionaries. Add your route IDs to routes array.",
    },
    {
        type: "header",
        level: 2,
        content: "Auto-Generated Files",
    },
    {
        type: "paragraph",
        margin: 0,
        content: "Some files are auto-generated during the build process. Most of them are located in the .build directory. There is no need to edit anything there because each file gets overwritten on every build.",
    },
];
