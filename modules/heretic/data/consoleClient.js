export default [{
        type: "header",
        level: 1,
        content: "Console Client",
    },
    {
        type: "paragraph",
        content: "There is console client available which allows you to automate some routine Heretic tasks such as creating or removing new pages.",
    },
    {
        type: "paragraph",
        content: "To use CLI, please run the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run cli --`,
    },
    {
        type: "paragraph",
        content: "Parameters available:",
    },
    {
        type: "table",
        content: [{
                option: "<strong>--addModule</strong> <i>&lt;id&gt; [--navigation]</i>",
                description: "Create a new page (optionally add to navbar)",
            }, {
                option: "<strong>--removeModule</strong> <i>&lt;id&gt;</i>",
                description: "Delete existing page",
            },
            {
                option: "<strong>--addLanguage</strong> <i>&lt;id:name&gt;</i>",
                description: "Add new language (example: de-de:Deutsch)",
            },
            {
                option: "<strong>--removeLanguage</strong> <i>&lt;id&gt;</i>",
                description: "Delete existing language",
            },
            {
                option: "<strong>--importGeoData</strong>",
                description: "Import geo database (requires MongoDB to be enabled)",
            },
            {
                option: "<strong>--createAdmin</strong>",
                description: "Create admin user with access to admin panel (requires MongoDB to be enabled)",
            },
            {
                option: "<strong>--resetPassword</strong> <i>&lt;username&gt;</i>",
                description: `Create user or reset existing user's password to "password"`,
            },
        ],
    },
    {
        type: "header",
        level: 2,
        content: "Examples",
    },
    {
        type: "paragraph",
        content: "Add a new page with ID test, route /test and include it into the navbar:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run cli -- --addModule test --navigation`,
    },
    {
        type: "paragraph",
        content: "Remove a page with ID test (also removes the corresponding entries in the navbar):",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run cli -- --removeModule test`,
    },
    {
        type: "paragraph",
        content: "Add a new language (with ISO code de-de and name Deutsch):",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run cli -- --addLanguage de-de:Deutsch`,
    },
    {
        type: "paragraph",
        content: "Remove an existing language de-de:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run cli -- --removeLanguage de-de`,
    },
    {
        type: "header",
        level: 2,
        content: "Backup",
    },
    {
        type: "paragraph",
        content: "In order to create full backup of your website, please run the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run backup`,
    },
    {
        type: "paragraph",
        content: "By default, backup archive is saved to backup folder, example: backup/heretic_YYYYMMDD_HHMMDD.zip. You may change this behavior by using options:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run backup -- --dir "myBackupDir" --filename "sample.zip"`,
    },
    {
        type: "paragraph",
        content: "The directory is relative to Heretic root.",
    },
    {
        type: "header",
        level: 3,
        content: "Archive Structure",
    },
    {
        type: "paragraph",
        content: "Heretic backup file is a regular ZIP archive which contains the following directories:",
    },
    {
        type: "table",
        content: [{
                option: "dist",
                description: "Copy of dist directory",
            },
            {
                option: "dump",
                description: "Database dump created by mongodump utility",
            },
            {
                option: "etc",
                description: "All configuration files from etc directory",
            },
            {
                option: "root",
                description: "Copy of root directory",
            },
            {
                option: "src",
                description: "Copy of src directory",
            },
            {
                option: "site",
                description: "Copy of site directory",
            },
        ],
    },
    {
        type: "header",
        level: 3,
        content: "Restore Backup",
    },
    {
        type: "paragraph",
        content: "In order to restore backup archive, please run the following command:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run restore -- --path "path/to/your/backup.zip"`,
    },
    {
        type: "paragraph",
        content: "The directory is relative to Heretic root. Your current site will be saved to save_YYYYMMDD_HHMMSS directory, including current database dump. If you don't wish to save current website, you may wish to specify --no-save option:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run restore -- --path "path/to/your/backup.zip" --no-save`,
    },
    {
        type: "paragraph",
        content: "What happens if you restore your backup archive using this utility:",
    },
    {
        type: "list",
        content: ["src, dist, site and etc directories of your website are dropped and replaced by the corresponding directories from backup archive", "All collections from your database are dropped and replaced by collections from backup archive", "The following files are dropped and replaced in the root folder of your site: webpack.config.js, webpack.utils.js, package.json, package-lock.json"],
    },
    {
        type: "header",
        level: 2,
        content: "Interactive Console Client",
    },
    {
        type: "paragraph",
        content: "You may wish to use an user-friendly interactive version of console client if you don't want to keep all the parameter names in mind:",
    },
    {
        type: "code",
        language: "bash",
        content: `npm run cli-interactive`,
    },
];
