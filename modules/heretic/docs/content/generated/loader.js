export default class {
    static async loadArea(area) {
        switch (area) {
        case "introduction":
            return import( /* webpackChunkName: "page.heretic.docs.introduction" */ "./introduction/index.marko");
        case "gettingStarted":
            return import( /* webpackChunkName: "page.heretic.docs.gettingStarted" */ "./gettingStarted/index.marko");
        case "configurationFiles":
            return import( /* webpackChunkName: "page.heretic.docs.configurationFiles" */ "./configurationFiles/index.marko");
        case "consoleClient":
            return import( /* webpackChunkName: "page.heretic.docs.consoleClient" */ "./consoleClient/index.marko");
        case "rateLimiting":
            return import( /* webpackChunkName: "page.heretic.docs.rateLimiting" */ "./rateLimiting/index.marko");
        case "serverDeployment":
            return import( /* webpackChunkName: "page.heretic.docs.serverDeployment" */ "./serverDeployment/index.marko");
        case "creatingModules":
            return import( /* webpackChunkName: "page.heretic.docs.creatingModules" */ "./creatingModules/index.marko");
        case "devTutorial":
            return import( /* webpackChunkName: "page.heretic.docs.devTutorial" */ "./devTutorial/index.marko");
        case "componentFormBuilder":
            return import( /* webpackChunkName: "page.heretic.docs.componentFormBuilder" */ "./componentFormBuilder/index.marko");
        case "componentTableBuilder":
            return import( /* webpackChunkName: "page.heretic.docs.componentTableBuilder" */ "./componentTableBuilder/index.marko");
        case "componentRouter":
            return import( /* webpackChunkName: "page.heretic.docs.componentRouter" */ "./componentRouter/index.marko");
        case "componentModalDialog":
            return import( /* webpackChunkName: "page.heretic.docs.componentModalDialog" */ "./componentModalDialog/index.marko");
        case "componentsOther":
            return import( /* webpackChunkName: "page.heretic.docs.componentsOther" */ "./componentsOther/index.marko");
        case "components":
            return import( /* webpackChunkName: "page.heretic.docs.components" */ "./components/index.marko");
        case "i18n":
            return import( /* webpackChunkName: "page.heretic.docs.i18n" */ "./i18n/index.marko");
        case "apiModules":
            return import( /* webpackChunkName: "page.heretic.docs.apiModules" */ "./apiModules/index.marko");
        case "librariesAndHelpers":
            return import( /* webpackChunkName: "page.heretic.docs.librariesAndHelpers" */ "./librariesAndHelpers/index.marko");
        }
    }
}
