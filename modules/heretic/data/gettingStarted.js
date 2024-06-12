export default [{
        type: "header",
        level: 1,
        content: "Getting Started",
    },
    {
        type: "paragraph",
        content: "In order to run Heretic, you will need a web server which can run Node.js scripts. There are no special requirements, so if you can install and use Node, you can host a Heretic website.",
    },
    {
        type: "paragraph",
        content: "In case your site needs additional features, such as database access, control panel, etc., you will also need to install additional packages.",
    },
    {
        type: "paragraph",
        content: "Heretic can be run on the server as a standalone application or in a Docker container (or in Docker Compose). Running Heretic in a container is preferable because it allows Heretic's operation to be separated from the main host and is more secure.",
    },
    {
        type: "header",
        level: 2,
        content: "Running with Docker Compose",
    },
    {
        type: "paragraph",
        content: "The easiest way to run a fully functional and maintainable version of Heretic is to use Docker Compose. You can choose one of the options (Heretic only, Heretic + MongoDB, Heretic + Redis, or all at once). Each application runs in a separate container, and the containers are connected by a common network.",
    },
    {
        type: "paragraph",
        content: "This option requires downloading the interactive script using the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `curl -sS -o docker-compose.sh https://hereticjs.org/compose`,
    },
    {
        type: "paragraph",
        content: "Next, run the script by executing the command:",
    },
    {
        type: "code",
        language: "bash",
        content: `bash docker-compose.sh`,
    },
    {
        type: "image",
        src: "compose.png",
    },
    {
        type: "paragraph",
        content: "Finally, start docker compose containers by running:",
    },
    {
        type: "code",
        language: "bash",
        content: `docker compose up -d`,
    },
    {
        type: "header",
        level: 2,
        content: "Running a Docker Container",
    },
    {
        type: "paragraph",
        content: "In its base configuration, Heretic requires nothing more than the standard features provided by Node.js. If you do not require advanced features such as user management, database, etc., you can run Heretic in a container using the following commands.",
    },
    {
        type: "code",
        language: "bash",
        content: `docker run -d --name heretic\n     -v /var/www/heretic/dist:/heretic/dist\n     -v /var/www/heretic/site:/heretic/site\n     -v /var/www/heretic/logs:/heretic/logs\n     -v /var/www/heretic/backup:/heretic/backup\n     -p 3001:3001\n     hereticjsorg/heretic:latest`,
    },
    {
        type: "paragraph",
        content: "You may wish to replace /var/www/heretic with any directory which shall be used to keep Heretic data on your host machine. You may also wish to replace the default port mapping (for example, to make container listen on the port 80, use the -p 80:3001 parameter).",
    },
    {
        type: "header",
        level: 2,
        content: "Standalone",
    },
    {
        type: "paragraph",
        content: "If you want to run Heretic without containers (in standalone mode), you must make sure that all necessary dependencies (such as Node.js, MongoDB and Redis if needed) are available on your server. For automated setup, you can download an interactive script that will download the latest version of Heretic from Github and execute the necessary commands for the first start:"
    },
    {
        type: "code",
        language: "bash",
        content: `curl -sS -o heretic.sh https://hereticjs.org/install`,
    },
    {
        type: "paragraph",
        content: "Next, run the script by executing the command:",
    },
    {
        type: "code",
        language: "bash",
        content: `bash heretic.sh`,
    },
    {
        type: "paragraph",
        content: "You can also perform all the necessary actions yourself, taking into account the specifics of your operating system version. First, you need to clone Heretic from Github repository:",
    },
    {
        type: "code",
        language: "bash",
        content: `git clone --depth 1 --branch master https://github.com/hereticjsorg/heretic.git`,
    },
    {
        type: "paragraph",
        content: "Then, you will need to install the required NPM modules and start the build process:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run install-modules`,
    },
    {
        type: "paragraph",
        content: "When successful, the required modules will be downloaded to ./node_modules directory.",
    },
    {
        type: "paragraph",
        content: "In order to create templates of configuration files, directories, etc., you need to run the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run configure`,
    },
    {
        type: "paragraph",
        content: "Finally, you may wish to run the build process:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run build -- --dev`,
    },
    {
        type: "paragraph",
        content: "This command will generate your site in development mode (faster, less optimizations). In order to generate a website in production mode, run the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run build`,
    },
    {
        type: "paragraph",
        content: "Finally, start your web server using the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run server`,
    },
    {
        type: "paragraph",
        content: "When successfully, your website will be accessible at http://127.0.0.1:3001.",
    },
    {
        type: "header",
        level: 2,
        content: "Tests",
    },
    {
        type: "paragraph",
        content: "In order to run built-in tests, please run the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm test`,
    },
    {
        type: "paragraph",
        content: "Jest, a delightful JavaScript Testing Framework with a focus on simplicity is used here.",
    },
    {
        type: "header",
        level: 1,
        content: "Build Process",
    },
    {
        type: "paragraph",
        content: "Heretic uses Webpack, a static module bundler for modern JavaScript applications. There are two build modes in Heretic: build-dev and build-production.",
    },
    {
        type: "header",
        level: 2,
        content: "build-dev",
    },
    {
        type: "paragraph",
        content: "During build process, Heretic creates a ./dist directory which contains everything you need to run your website (static bundles, server script etc.). There are following stages of website build:",
    },
    {
        type: "list",
        content: ["generate internationalization loader to fetch translation files dynamically (./site/.build/i18n-loader.js) in SPA mode", "generate pages and modules loader used by SPA mode used to load data without page reload (./site/.build/modules-loader.js)", "generate configuration files used by build script (saved to ./site/.build directory)", "generate site.webmanifest (saved to ./src/static/site.webmanifest directory)", `generate &lt;lang-switch/&gt; components for each page where langSwitchComponent parameter is set to true`, "generate bundles and static assets (saved to ./dist/public)", "generate script to run as a web server (saved to ./dist/server.js)"],
    },
    {
        type: "paragraph",
        content: "The following directories are deleted and re-created every time you start the build process: ./dist, ./site/.build.",
    },
    {
        type: "paragraph",
        content: "In build-dev mode:",
    },
    {
        type: "list",
        content: ["inline-source-map is used as devtool", "style-loader is used as loader for CSS, SCSS or SASS files", "no code is minimized for build performance reasons", "no compression plugin is used (static assets and bundles are not compressed)"],
    },
    {
        type: "header",
        level: 2,
        content: "build-production",
    },
    {
        type: "paragraph",
        content: "This mode is intended to prepare your website to run in production mode. It has some extra optimizations so it's slower as build-dev mode and must be used when you're ready to publish your website.",
    },
    {
        type: "paragraph",
        content: "In build-production mode:",
    },
    {
        type: "list",
        content: ["not using devtool", "MiniCssExtractPlugin is used as loader for CSS, SCSS or SASS files", "TerserPlugin and CssMinimizerPlugin plugins are used to minimize JS code and CSS styles", "CompressionPlugin is used to generate GZ files to load website faster"],
    },
    {
        type: "header",
        level: 2,
        content: "Misc Static Assets",
    },
    {
        type: "paragraph",
        content: "Several static assets are automatically generated during the build process:",
    },
    {
        type: "list",
        content: ["Sitemap file is generated automatically based on pages settings", "Site manifest is generated (based on website settings)", "Everything from ./site/static is copied to ./dist/public automatically (this includes favicons, sitemap, site manifest etc.) - you may wish to copy your statics assets to include into ./dist directory here", "Everything from ./src/defaults/static/data is copied to ./dist automatically (this includes for example captcha font and other data which will be used by server but should not be exposed to public)."],
    },
];
