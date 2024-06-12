const id = "hereticjsorg";

const config = {
    secret: "D6C8D4E54FB6A402874CEC76C7D2FA74C0F1E694998FEEEC9BBC9A6351FA7569",
    hashMethod: "argon2",
    server: {
        ip: "0.0.0.0",
        port: 3001,
        static: true,
    },
    auth: {
        admin: false,
        signIn: false,
        signUp: false,
    },
    mongo: {
        enabled: false,
    },
    redis: {
        enabled: false,
    },
    email: {
        enabled: false,
    },
    webSockets: {
        enabled: false,
    },
    token: {
        expiresIn: 604800,
        ip: false,
    },
    passwordPolicy: {},
    oauth2: [],
    cookieOptions: {},
    log: {
        level: "error",
    },
    rateLimit: {
        enabled: false,
        ban: false,
        global: {},
        whiteList: [],
        blackList: [],
        addHeaders: {},
    },
    directories: {
        tmp: null,
        files: "files",
    },
    collections: {},
    routes: {
        admin: "/admin",
        signInAdmin: "/admin/signIn",
        signIn: "/signIn",
        signOutAdmin: "/admin/signOut",
        signOut: "/signOut",
        account: "/account",
        signUp: "/signUp",
        restorePassword: "/restorePassword",
        privacyPolicy: "/privacy/site",
        privacyCookies: "/privacy/cookies",
    },
    buildOptions: {
        productionCompress: true,
    },
    test: {
        headless: true,
        executablePath: "auto",
        args: ["--window-size=1920,1080", "--no-sandbox"],
        defaultViewport: null,
        devtools: true,
    },
    heretic: {
        zipball: "http://github.com/hereticjsorg/heretic/zipball/master/",
        packageJson: "https://raw.githubusercontent.com/hereticjsorg/heretic/master/package.json",
        darkModeEnabled: true,
        restartCommand: `pm2 restart ${id}`,
        markoDebug: false,
    },
    id,
    sessionTTL: 604800,
};

module.exports = config;
