export default [{
        type: "header",
        level: 1,
        content: "I18n",
    },
    {
        type: "paragraph",
        content: "Heretic has a full support for multi-language sites out of the box (internationalization).",
    },
    {
        type: "header",
        level: 2,
        content: "Configuration files",
    },
    {
        type: "paragraph",
        content: "First thing first, you well need to edit the file containing a list of languages available (./site/etc/languages.json):",
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "en-us": "English",\n    "ru-ru": "Русский"\n}`,
    },
    {
        type: "paragraph",
        content: "To include a new language into your website, simply add a new key and value, example:",
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "en-us": "English",\n    "ru-ru": "Русский",\n    "de-de": "Deutsch"\n}`,
    },
    {
        type: "paragraph",
        content: "The first language in this list is a default one (used when no language is selected).",
    },
    {
        type: "paragraph",
        content: "After you've defined all the languages you need, it's time to change the main meta.json (./site/etc/meta.json) and update it according to your language list:",
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "title": {\n        "en-us": "Heretic Test Website",\n        "ru-ru": "Тестовый сайт на Heretic"\n    },\n    "shortTitle": {\n        "en-us": "Heretic",\n        "ru-ru": "Тест"\n    },\n    "description": {\n        "ru-ru": "Тестовый сайт, созданный на Heretic",\n        "en-us": "Test site built on Heretic"\n    }\n}`,
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "en-us": "English",\n    "ru-ru": "Русский",\n    "de-de": "Deutsch"\n}`,
    },
    {
        type: "paragraph",
        content: "You will need to set title, shortTitle and description to set website title, a shorter version of title and general description, correspondingly. These values are used to display in the browser window title and to generate sitemap for you.",
    },
    {
        type: "paragraph",
        content: "Each page of a module has meta.src.json file where you must define title and description of each page according to your language list.",
    },
    {
        type: "header",
        level: 2,
        content: "Localized Pages Versions",
    },
    {
        type: "paragraph",
        content: "Each page may have its localized version (that's optional, but you can use this feature in case when content for different languages is absolutely different).",
    },
    {
        type: "paragraph",
        content: "To use this feature, you will need to set the langSwitchComponent parameter to true in page's page.js file. If true, Heretic will generate &lt;lang-switch/&gt; component for each page to display a different content version for each page.",
    },
    {
        type: "paragraph",
        content: "Each page has the following structure:",
    },
    {
        type: "list",
        content: [`the main index.marko file only has &lt;content/&gt; tag inside`, `the index.marko of contents component refers to the the &lt;lang-switch/&gt; component of the current page`, `the index.marko of lang-switch component (auto-generated during build process) chooses which component to display, based on current language`, `the index.marko of lang-xx-xx component displays actual content for a corresponding language`],
    },
    {
        type: "paragraph",
        content: "Take a look on a page template located in ./src/core/defaults/blank as a reference.",
    },
    {
        type: "paragraph",
        content: `Note: you should NOT edit &lt;lang-switch/&gt; manually because it gets overwritten each time you start the build process.`,
    },
    {
        type: "paragraph",
        content: `If you don't need a separate content for different languages, you may wish to simply set langSwitchComponent parameter to false.`,
    },
    {
        type: "header",
        level: 2,
        content: "System-Wide Translation",
    },
    {
        type: "paragraph",
        content: `You may use the &lt;t/&gt; component to translate strings. There are two kind of translation dictionaries: core and user (located in ./src/translations directory). You may change the user dictionaries as the don't get overwritten during the update process.`,
    },
    {
        type: "paragraph",
        content: `To translate strings this way, you will need:`,
    },
    {
        type: "list",
        content: [`Add a new key-value pair to each language, dictionary, e.g. ./site/translations/en-us.json, ./site/translations/ru-ru.json etc.`, `Add a &lt;t/&gt; and set your key as tag body`],
    },
    {
        type: "paragraph",
        content: `Translation dictionary (e.g. en-us.json) is a simple JSON file and looks like this:`,
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "404": "Not Found",\n    "desc404": "The link is broken or the page has been moved.",\n    "internalServerErrorTitle": "Internal Server Error",\n    "internalServerErrorMessage": "There is an error on the server side. Please try to refresh this page.",\n    "somethingWentWrong": "Something went wrong :-(",\n    "poweredByHeretic": "Powered by Heretic",\n    "mMatveev": "Mikhail A. Matveev",\n    "mitLicense": "Licensed under MIT License."\n}`,
    },
    {
        type: "paragraph",
        content: `In order to translate a string (mitLicense for example), you may use the following syntax:`,
    },
    {
        type: "code",
        language: "json",
        content: `<t>mitLicense</t>`,
    },
    {
        type: "paragraph",
        content: `When rendering, it will replaced to Licensed under MIT License for en-us language.`,
    },
    {
        type: "header",
        level: 2,
        content: "Template Support",
    },
    {
        type: "paragraph",
        content: `Under the hood, every string from the translation dictionaries (JSON files) is being considered as a template and is being processed by Lodash Template Engine. This allows you to use all the features of the template engine, e.g. variables.`,
    },
    {
        type: "paragraph",
        content: `Example:`,
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "greeting": "Hello \${user}!"\n}`,
    },
    {
        type: "code",
        language: "json",
        content: `<t data={user: "Medved"}>greeting</t>`,
    },
    {
        type: "paragraph",
        content: `Result:`,
    },
    {
        type: "code",
        language: "json",
        content: `Hello Medved!`,
    },
    {
        type: "header",
        level: 2,
        content: "Pluralization",
    },
    {
        type: "paragraph",
        content: `Heretic i18n engine has pluralization support out-of-the-box. It uses Intl.PluralRules under the hood in order to display different strings for different pluralization rules.`,
    },
    {
        type: "paragraph",
        content: `Example:`,
    },
    {
        type: "code",
        language: "json",
        content: `{\n    "online": "\${count} users online",\n    "online_one": "\${count} user online"\n}`,
    },
    {
        type: "code",
        language: "html",
        content: `<div>\n    <t data={count: 1} plural=1>online</t>\n</div>\n<div>\n    <t data={count: 2} plural=2>online</t>\n</div>`,
    },
    {
        type: "paragraph",
        content: `Result:`,
    },
    {
        type: "code",
        language: "json",
        content: `1 user online\n2 users online`,
    },
];
