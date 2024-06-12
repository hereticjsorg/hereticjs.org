export default [{
        type: "header",
        level: 1,
        content: "Router Components",
    },
    {
        type: "paragraph",
        content: "Router components are required for navigation between pages and modules in SPA mode.",
    },
    {
        type: "header",
        level: 2,
        content: "Router",
    },
    {
        type: "paragraph",
        content: "Display different content based on current route.",
    },
    {
        type: "paragraph",
        content: "Usage:",
    },
    {
        type: "code",
        language: "html",
        content: `<if(process.browser)>\n    <hrouter on-route-change("onRouteChange")/>\n    <if(state.routed)>\n        <div id="hr_content_render_wrap"/>\n    </if>\n</if>`,
    },
    {
        type: "paragraph",
        content: "Then, load the content which is appropriate to the current route:",
    },
    {
        type: "code",
        language: "js",
        content: `const pagesLoader = require("#build/loaders/page-loader-userspace");\nconst routesData = require("#build/build.json");\n\nasync onCreate(input, out) {\n    this.state = {\n        mounted: false,\n        route: null,\n        routed: false,\n    };\n    this.componentsLoaded = {};\n    this.serverRoute = out.global.route;\n    this.webSockets = out.global.webSockets;\n    this.utils = new Utils(this, this.language);\n}\n\nasync onRouteChange(router) {\n    let component = null;\n    const route = router.getRoute();\n    const routeData = routesData.routes.userspace.find(r => r.id === route.id);\n    if ((route.id !== this.serverRoute || this.state.routed) && routeData) {\n        try {\n            component = await pagesLoader.loadComponent(route.id);\n            const renderedComponent = await component.default.render();\n            this.setState("routed", true);\n            await this.utils.waitForElement("hr_content_render_wrap");\n            const contentRenderWrap = document.getElementById("hr_content_render_wrap");\n            renderedComponent.replaceChildrenOf(contentRenderWrap);\n            this.componentsLoaded[route.id] = true;\n        } catch {\n            // Do something with this error\n            return;\n        }\n    }\n    if (this.state.routed && !routeData) {\n        component = await pagesLoader.loadComponent(null);\n        this.componentsLoaded["404"] = true;\n        this.setState("route", cloneDeep(route));\n    }\n}`,
    },
    {
        type: "header",
        level: 2,
        content: "Router-Link",
    },
    {
        type: "paragraph",
        content: "Router-links are functioning the same way as normal &lt;a/&gt;tags with only difference that those links are toggling different routes without actually reloading the page.",
    },
    {
        type: "paragraph",
        content: "Usage:",
    },
    {
        type: "code",
        language: "html",
        content: `<hrouter-link \n    route="routeId" class="is-underlined">\n    Link Text\n</hrouter-link>`,
    },
    {
        type: "paragraph",
        content: "You may wish to set any value for routeId which corresponds to your page ID you wish to link to.",
    },
    {
        type: "header",
        level: 2,
        content: "Admin Routes",
    },
    {
        type: "paragraph",
        content: "There are to different components use for Admin Panel:",
    },
    {
        type: "code",
        language: "html",
        content: `<hrouter-admin/>\n<hrouter-link-admin/>`,
    },
    {
        type: "paragraph",
        content: "They do work the same way as regular components. Other than the area of use, there is no other difference.",
    },
];
