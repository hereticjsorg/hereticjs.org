export default [{
        type: "header",
        level: 1,
        content: "Development Tutorial",
    }, {
        type: "paragraph",
        content: `It's easy and fun to work with Heretic. Because of the modular structure you need to use the "site" directory to put your modules and assets there. This tutorial will guide you with the process of a simple module creation.`,
    }, {
        type: "warning",
        content: `Before you continue with this tutorial, please make sure that you've installed Heretic on your computer. Please follow the <a href="/documentation?area=gettingStarted" class="is-underlined" route=true area="gettingStarted">Getting Started</a> manual steps if you didn't already. Also, it's recommended to install a text editor with Marko and JavaScript syntax highlighting support, such as <a href="https://code.visualstudio.com/" class="is-underlined" target="_blank">Visual Studio Code</a>.`,
    }, {
        type: "info",
        content: `This tutorial is intended to be used on Linux or MacOS machine. If you are using Windows, you will need to understand the difference between the systems, including command line tools, and type "\\" instead of "/" for directories.`,
    }, {
        type: "header",
        level: 2,
        content: "Creating a simple module",
    }, {
        type: "paragraph",
        content: `Let's start by creating a directory for your module:`,
    }, {
        type: "code",
        language: "bash",
        content: `mkdir ./site/modules/example`,
    }, {
        type: "paragraph",
        content: `Next, create a file called module.js and describe your module information there. We will only describe the userspace routes for now:`,
    }, {
        type: "code",
        language: "js",
        content: `const id = "example";

module.exports = {
    id,
    routes: {
        userspace: {
            page1: {
                path: "/page1"
            },
        },
        admin: {}
    },
};`
    }, {
        type: "paragraph",
        content: `Next, let's create the directory for our page:`,
    }, {
        type: "code",
        language: "bash",
        content: `mkdir ./site/modules/example/page1`,
    }, {
        type: "paragraph",
        content: `Each page should contain the page.js file. Let's create it:`,
    }, {
        type: "code",
        language: "js",
        dir: "site/modules/example/page1/page.js",
        content: `const meta = require("./meta.json");

module.exports = {
    id: "page1",
    langSwitchComponent: false,
    ...meta,
};
`
    }, {
        type: "paragraph",
        content: `The meta.json file contains page metadata. And it's being automatically generated based on the meta.src.json file, so you will need to create a file with such filename:`,
    }, {
        type: "code",
        dir: "site/modules/example/page1/meta.src.json",
        language: "json",
        content: `{
    "title": {
        "en-us": "Home Page"
    },
    "description": {
        "en-us": "Home page of the Heretic framework"
    }
}`
    }, {
        type: "paragraph",
        content: `If you need to include the page into your website's sitemap file, you will need to create a sitemap.json file:`,
    }, {
        type: "code",
        language: "json",
        dir: "site/modules/example/page1/sitemap.json",
        content: `{
    "include": true,
    "lastmod": true,
    "changefreq": "always",
    "priority": 0.5
}`
    }, {
        type: "paragraph",
        content: `Next, you will need to create the marko.src.json file. It's required to tell the Marko bundler where to search for components. Instead of specifying the full path, you may wish to use the shorthands:`,
    }, {
        type: "code",
        language: "json",
        dir: "site/modules/example/page1/marko.src.json",
        content: `{
    "tags-dir": ["./", "#site", "#components"]
}`
    }, {
        type: "paragraph",
        content: `Now it's time to create two more files to make your page work. First, create the index.marko file; it's used for client-side rendering:`,
    }, {
        type: "code",
        language: "html",
        dir: "site/modules/example/page1/index.marko",
        content: `<content/>`
    }, {
        type: "paragraph",
        content: `Then, create the server.marko file; it's used for server-side rendering:`,
    }, {
        type: "code",
        dir: "site/modules/example/page1/server.marko",
        language: "html",
        content: `<view>\n    <content/>\n</view>`
    }, {
        type: "paragraph",
        content: `Now it's time to create a directory where you are going to put all you page content to:`,
    }, {
        type: "code",
        language: "bash",
        content: `mkdir ./site/modules/example/page1/content`,
    }, {
        type: "paragraph",
        content: `Next, create a index.marko file within your content directory:`,
    }, {
        type: "code",
        language: "html",
        dir: "site/modules/example/page1/content/index.marko",
        content: `<if(state.ready)>\n    <h1 class="title is-1 has-text-weight-light">Hello world!</h1>\n    <p>Welcome to your new page.</p>\n</if>`
    }, {
        type: "paragraph",
        content: `And add some JavaScript to the component.js file within your content directory:`,
    }, {
        type: "code",
        language: "js",
        dir: "site/modules/example/page1/content/component.js",
        content: `import pageConfig from "../page.js";
import Utils from "#lib/componentUtils";
    
export default class {
    onCreate(input, out) {
        this.state = {
            ready: !process.browser,
        };
        this.language = out.global.language;
        this.siteTitle = out.global.siteTitle;
        if (process.browser) {
            window.__heretic = window.__heretic || {};
            window.__heretic.outGlobal = window.__heretic.outGlobal || out.global;
            this.language = this.language || window.__heretic.outGlobal.language;
            this.siteTitle = out.global.siteTitle || window.__heretic.outGlobal.siteTitle;
            document.title = \`\${pageConfig.title[this.language]} – \${this.siteTitle}\`;
        }
        this.utils = new Utils(this, this.language);
    }
    
    async onMount() {
        await this.utils.waitForLanguageData();
        this.setState("ready", true);
    }
}`
    }, {
        type: "paragraph",
        content: `What's happening in this code?`,
    }, {
        type: "list",
        content: [`A state object property "ready" is created in order to see if the page is ready to be displayed`, `For browser, the title is set based on the current language`, `Utils are being initialized in order to call some internationalization-related methods`, `When page is mounted in the browser, the global language data is loaded`, `Finally, the "ready" flag is set to true, so the page will be rendered in the browser`],
    }, {
        type: "paragraph",
        content: `Before you will be able to see the changes, you will need to rebuild Heretic. To do this, simply run the following command:`,
    }, {
        type: "code",
        language: "bash",
        content: `npm run build -- --dev && npm run server`,
    }, {
        type: "paragraph",
        content: `Then, go to your browser and locate the following URL: <a href="http://127.0.0.1:3001/page1" target="_blank" class="is-underlined">http://127.0.0.1:3001/page1</a>. You will be able to see your page content there.`,
    }, {
        type: "header",
        level: 2,
        content: "Multi-language support",
    }, {
        type: "paragraph",
        content: `Let's add some i18n (yes, this is pronounced as "internationalization") to your new module. To do this, you'll need to create the "translations" directory first:`,
    }, {
        type: "code",
        language: "bash",
        content: `mkdir ./site/modules/example/translations`,
    }, {
        type: "paragraph",
        content: `For every language supported by your website a corresponding translation dictionary should be created. For example, this could be a translation file for English language:`,
    }, {
        type: "code",
        language: "json",
        dir: "site/modules/example/translations/en-us.json",
        content: `{\n    "translatedString": "This string is now translated"\n}`,
    }, {
        type: "paragraph",
        content: `Next, you will need to modify your page's component.js in order to load the page translation dictionary:`,
    }, {
        type: "code",
        language: "js",
        dir: "site/modules/example/page1/content/component.js",
        content: `import moduleConfig from "../../module.js";
import pageConfig from "../page.js";
import Utils from "#lib/componentUtils";
    
export default class {
    onCreate(input, out) {
        this.state = {
            ready: !process.browser,
        };
        this.language = out.global.language;
        this.siteTitle = out.global.siteTitle;
        if (process.browser) {
            window.__heretic = window.__heretic || {};
            window.__heretic.outGlobal = window.__heretic.outGlobal || out.global;
            this.language = this.language || window.__heretic.outGlobal.language;
            this.siteTitle = out.global.siteTitle || window.__heretic.outGlobal.siteTitle;
            document.title = \`\${pageConfig.title[this.language]} – \${this.siteTitle}\`;
        }
        this.utils = new Utils(this, this.language);
    }
    
    async onMount() {
        await this.utils.waitForLanguageData();
        await this.utils.loadLanguageData(moduleConfig.id);
        this.setState("ready", true);
    }
}`,
    }, {
        type: "paragraph",
        content: `Now, it's time to update the index.marko file of your page:`,
    }, {
        type: "code",
        language: "html",
        dir: "site/modules/example/page1/content/index.marko",
        content: `<if(state.ready)>\n    <h1 class="title is-1 has-text-weight-light">Hello world!</h1>\n    <p>Welcome to your new page.</p>\n    <t>translatedString</t>\n</if>`
    }, {
        type: "paragraph",
        content: `Don't forget to rebuild your Heretic instance in order to see the changes. Viola. You are using translation dictionaries from now on!`,
    }, {
        type: "header",
        level: 2,
        content: "API",
    },
    {
        type: "paragraph",
        content: `It's easy to create API endpoints for your application. To do so, you will need to create an "api" directory first:`,
    },
    {
        type: "code",
        language: "bash",
        content: `mkdir ./site/modules/example/api`,
    }, {
        type: "paragraph",
        content: `Next, you will need to create the "index.js" file which will become an entrypoint:`,
    }, {
        type: "code",
        language: "js",
        dir: "site/modules/example/api/index.js",
        content: `import moduleConfig from "../module";
import apiExample from "./apiExample;
    
export default fastify => {
    fastify.post(\`/api/\${moduleConfig.id}/endpoint\`, apiExample());
};`
    }, {
        type: "paragraph",
        content: `Finally, create your API endpoint:`,
    }, {
        type: "code",
        language: "js",
        dir: "site/modules/example/api/apiExample.js",
        content: `export default () => ({
  async handler(req, rep) {
      try {
          return rep.code(200).send({
              message: "OK Computer",
          });
      } catch (e) {
          this.log.error(e);
          return Promise.reject(e);
      }
  }
});`
    }, {
        type: "paragraph",
        content: `If you want to check the credentials (JWT, Bearer token), add the following code:`,
    }, {
        type: "code",
        language: "js",
        dir: "site/modules/example/api/apiExample.js",
        content: `export default () => ({
    async handler(req, rep) {
        try {
             const authData = await req.auth.getData(req.auth.methods.HEADERS);
            if (!authData) {
                return rep.error({}, 403);
            }
            return rep.code(200).send({
                message: "OK Computer",
            });
        } catch (e) {
            this.log.error(e);
            return Promise.reject(e);
        }
    }
});`
    }, {
        type: "paragraph",
        content: `To call the API endpoint from you page, let's add a button which will have an "on-click" event handler:`,
    }, {
        type: "code",
        language: "html",
        dir: "site/modules/example/page1/content/index.marko",
        content: `<if(state.ready)>\n    <h1 class="title is-1 has-text-weight-light">Hello world!</h1>\n    <p>Welcome to your new page.</p>\n    <t>translatedString</t>\n    <div class="mt-4">\n        <button class="button is-primary" on-click("onMyButtonClick")>My Button</button>\n    </div>\n</if>`
    }, {
        type: "paragraph",
        content: `Add the "onMyButtonClick" handler to your "component.js" file:`,
    },
    {
        type: "code",
        language: "js",
        dir: "site/modules/example/page1/content/component.js",
        content: `import axios from "axios";
import pageConfig from "../page.js";
import moduleConfig from "../../module.js";
import Utils from "#lib/componentUtils";
    
export default class {
    onCreate(input, out) {
        this.state = {
            ready: !process.browser,
        };
        this.language = out.global.language;
        this.siteTitle = out.global.siteTitle;
        if (process.browser) {
            window.__heretic = window.__heretic || {};
            window.__heretic.outGlobal = window.__heretic.outGlobal || out.global;
            this.language = this.language || window.__heretic.outGlobal.language;
            this.siteTitle = out.global.siteTitle || window.__heretic.outGlobal.siteTitle;
            document.title = \`\${pageConfig.title[this.language]} – \${this.siteTitle}\`;
        }
        this.utils = new Utils(this, this.language);
    }
    
    async onMount() {
        await this.utils.waitForLanguageData();
        await this.utils.loadLanguageData(moduleConfig.id);
        this.setState("ready", true);
    }

    onMyButtonClick(e) {
        e.preventDefault();
        try {
            const {
                data
            } = await axios({
                method: "POST",
                url: \`/api/\${moduleConfig.id}/endpoint\`,
                data: {},
                headers: {},
            });
            // eslint-disable-next-line no-console
            console.log(data);
        } catch(e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }
}`,
    }, {
        type: "paragraph",
        content: `Once again, don't forget to rebuild your Heretic instance. When done, you will need to go to the <a href="http://127.0.0.1:3001/page1" target="_blank" class="is-underlined">http://127.0.0.1:3001/page1</a> URL, and open the DevTools or similar tool to see the console output (usually you'll just need to press F12 key). Press the "My Button" button, and you will see the server response there.`,
    }
];
