export default [{
        type: "header",
        level: 1,
        content: "Server Deployment",
    },
    {
        type: "paragraph",
        content: "Heretic can be installed on any server that can run Node.js. The database and caching server also require an architecture and configuration that must be supported by Mongo and Redis, but since these components are optional, the system can be run without them.",
    },
    {
        type: "header",
        level: 2,
        content: "Install on Linux Server",
    },
    {
        type: "paragraph",
        content: "The Heretic build process was successfully tested on Debian Linux 11, macOS and Windows 11. The system can be run on a server or virtual machine with 512 MB RAM, but at least 2 GB of RAM may be required for a successful build.",
    },
    {
        type: "paragraph",
        content: "Prerequisite steps to be taken before installing Heretic on the server:",
    },
    {
        type: "list",
        content: [`Install Node.js using
        <a class="is-underlined" href="https://nodejs.org/en/download/package-manager/all" target="_blank">this manual</a>`, `Install the MongoDB database management system using
        <a class="is-underlined" href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/" target="_blank">these instructions</a>
        — optional`, `Install Redis using apt package manager by running <i>apt install redis-server command</i> — optional`],
    },
    {
        type: "paragraph",
        content: "When finished, you need to proceed with the installation process. You may also wish to use docker in order to run Heretic.",
    },
    {
        type: "header",
        level: 2,
        content: "Running in Daemon Mode",
    },
    {
        type: "paragraph",
        content: "You will need to run Heretic web server in a daemon mode when running in production. There are many options how to achieve this depending on your operating system (systemd, init.d etc.). However, a recommended way is to use PM2, a daemon process manager that will help you manage and keep your application online.",
    },
    {
        type: "paragraph",
        content: "There is a PM2 configuration file (ecosystem.config.js) which allows to run you Heretic website by running a simple command:",
    },
    {
        type: "code",
        language: "bash",
        content: `pm2 start`,
    },
    {
        type: "paragraph",
        content: "Please refer to the PM2 docs to learn some tips and tricks on how to implement additional PM2 features.",
    },
    {
        type: "header",
        level: 2,
        content: "Proxy Web Server Configuration",
    },
    {
        type: "paragraph",
        content: "Heretic needs to run as web server in order to render modules on server-side. In development mode, Heretic may also serve static assets for you (which is not recommended in production mode), please check configuration files to disable or enable the static parameter in ./site/etc/system.js.",
    },
    {
        type: "paragraph",
        content: "It's recommended to use a proxy server such as NGINX in production. The simple configuration for NGINX may look like this:",
    },
    {
        type: "code",
        language: "nginx",
        content: `server {\n    listen 80;\n    server_name example.com;\n    root /var/www/example.com/dist/public;\n    access_log /var/www/example.com/logs/nginx_access.log;\n    error_log /var/www/example.com/logs/nginx_error.log;\n    location / {\n        try_files $uri @heretic;\n    }\n    location @heretic {\n        proxy_set_header Host $http_host;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://127.0.0.1:3001;\n    }\n    location /ws {\n        proxy_pass http://127.0.0.1:3001;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n    }\n    gzip on;\n    gzip_min_length 10240;\n    gzip_comp_level 1;\n    gzip_vary on;\n    gzip_disable msie6;\n    gzip_proxied expired no-cache no-store private auth;\n    gzip_types text/css\n        text/javascript\n        text/xml\n        text/plain\n        text/x-component\n        application/javascript\n        application/x-javascript\n        application/json\n        application/xml\n        application/rss+xml\n        application/atom+xml\n        font/truetype\n        font/opentype\n        application/vnd.ms-fontobject\n        image/svg+xml;\n}  `,
    },
    {
        type: "header",
        level: 2,
        content: "Standalone",
    },
    {
        type: "paragraph",
        content: `The dist and node_modules directories may work in standalone mode. This means that it's the only directories which might be copied to the production server (no and other directories are required in order to run).`,
    },
    {
        type: "paragraph",
        content: `However, it's recommended to keep the file structure as-is, because that's how you may simplify your updates and website rebuilds.`,
    },
];
