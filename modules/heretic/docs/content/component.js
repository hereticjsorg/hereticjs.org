import Prism from "prismjs";
import "prismjs/plugins/custom-class/prism-custom-class";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import Utils from "#lib/componentUtils";
import Query from "#lib/queryBrowser";
import pageConfig from "../page.js";
import moduleConfig from "../../module.js";
import Loader from "./generated/loader.js";
import areasData from "../../data/areas.json";

export default class {
    onCreate(input, out) {
        this.areas = [];
        areasData.map(i => {
            if (i.subMenu) {
                i.subMenu.map(si => this.areas.push(si.area));
            }
            if (i.area) {
                this.areas.push(i.area);
            }
        });
        const areaQuery = out.global.queryString ? out.global.queryString.area : null;
        const area = this.areas.indexOf(areaQuery) >= 0 ? areaQuery : "introduction";
        this.state = {
            ready: !process.browser,
            area: this.areas.indexOf(area) >= 0 ? area : "introduction",
            isMobile: false,
            navOpen: false,
            areaComponent: "",
            loading: false,
        };
        this.language = out.global.language;
        this.siteTitle = out.global.siteTitle;
        if (process.browser) {
            window.__heretic = window.__heretic || {};
            window.__heretic.outGlobal = window.__heretic.outGlobal || out.global;
            this.language = this.language || window.__heretic.outGlobal.language;
            this.siteTitle = out.global.siteTitle || window.__heretic.outGlobal.siteTitle;
            document.title = `${pageConfig.title[this.language]} – ${this.siteTitle}`;
        }
        this.utils = new Utils(this, this.language);
    }

    getAnimationTimer() {
        return setTimeout(() => this.setState("loading", true), 499);
    }

    clearAnimationTimer(timer) {
        if (timer) {
            clearTimeout(timer);
        }
        this.setState("loading", false);
    }

    sideMenuToggle() {
        this.setState("isMobile", window.matchMedia("(max-width: 768px)").matches);
        const sideMenu = document.getElementById("hr_docs_menu");
        const sideMenuDummy = document.getElementById("hr_docs_menu_dummy");
        const sideMenuDummy2 = document.getElementById("hr_docs_menu_dummy_2");
        const footer = document.getElementById("hr_footer");
        if (sideMenu && sideMenuDummy && sideMenuDummy2 && footer) {
            const menuRect = sideMenu.getBoundingClientRect();
            const footerRect = footer.getBoundingClientRect();
            sideMenuDummy2.style.width = `${menuRect.width}px`;
            sideMenu.style.position = this.state.isMobile ? "relative" : "fixed";
            sideMenu.style.overflow = this.state.isMobile ? "visible" : "auto";
            sideMenu.style.height = this.state.isMobile ? "unset" : `${(footerRect.top > window.innerHeight ? window.innerHeight : footerRect.top) - menuRect.top}px`;
        }
    }

    async loadArea(id) {
        const timer = this.getAnimationTimer();
        try {
            const areaComponent = (await Loader.loadArea(id)).default;
            this.setState("areaComponent", areaComponent);
            window.dispatchEvent(new CustomEvent("hrdprism"));
        } catch (err) {
            window.dispatchEvent(new CustomEvent("hrpanicmode", {
                detail: {
                    e: err,
                },
                bubbles: false,
                cancelable: true,
                composed: false,
            }));
        } finally {
            this.clearAnimationTimer(timer);
        }
    }

    async onMount() {
        this.query = new Query();
        const areaQuery = this.query.get("area");
        const area = this.areas.indexOf(areaQuery) < 0 ? "introduction" : areaQuery;
        const areaComponent = (await Loader.loadArea(area)).default;
        this.setState("areaComponent", areaComponent);
        this.setState("area", area);
        await this.utils.waitForLanguageData();
        await this.utils.loadLanguageData(moduleConfig.id);
        this.setState("ready", true);
        this.sideMenuToggleBound = this.sideMenuToggle.bind(this);
        window.addEventListener("scroll", this.sideMenuToggleBound);
        window.addEventListener("resize", this.sideMenuToggleBound);
        await this.utils.waitForElement("hr_docs_menu_dummy_2");
        await this.utils.waitForElement("hr_docs_menu");
        await this.utils.waitForElement("hr_footer");
        window.addEventListener("popstate", e => {
            const state = e.state || window.history.state || {};
            const areaId = state.area || "introduction";
            this.state.area = areaId;
            this.loadArea(areaId);
            window.scrollTo({
                top: 0,
            });
            window.dispatchEvent(new CustomEvent("hrrouternavigate", {
                detail: {
                    routeId: "heretic_docs",
                    language: this.language,
                },
                bubbles: false,
                cancelable: true,
                composed: false,
            }));
        });
        window.addEventListener("hrdclick", this.onComponentClick.bind(this));
        window.addEventListener("hrdnotify", this.onComponentNotify.bind(this));
        window.addEventListener("hrdprism", () => {
            setTimeout(() => Prism.highlightAll());
        });
        window.history.replaceState({
            area,
        }, document.title, `${pageConfig.url}?area=${area}`);
        window.dispatchEvent(new CustomEvent("hrrouternavigate", {
            detail: {
                routeId: "heretic_docs",
                language: this.language,
            },
            bubbles: false,
            cancelable: true,
            composed: false,
        }));
        this.sideMenuToggle();
        setTimeout(() => this.sideMenuToggleBound());
        Prism.plugins.customClass.map({
            number: "prism-number",
            tag: "prism-tag"
        });
        window.dispatchEvent(new CustomEvent("hrdprism"));
    }

    async onDocsMenuClick(e) {
        if (!e.target.closest("[data-id]")) {
            return;
        }
        e.preventDefault();
        this.setState("navOpen", false);
        const {
            id,
        } = e.target.closest("[data-id]").dataset;
        window.history.pushState({
            area: id,
        }, document.title, `${pageConfig.url}?area=${id}`);
        this.setState("area", id);
        window.scrollTo({
            top: 0,
        });
        await this.loadArea(id);
        setTimeout(() => window.dispatchEvent(new Event("resize")));
    }

    async onComponentClick(e) {
        this.state.area = e.detail.id;
        window.scrollTo({
            top: 0,
        });
        await this.loadArea(e.detail.id);
    }

    async onComponentNotify(e) {
        await this.utils.waitForComponent("notify");
        this.getComponent("notify").show(window.__heretic.t(e.detail.message), e.detail.css || "is-success");
    }

    onNavigationClick(e) {
        e.preventDefault();
        this.setState("navOpen", !this.state.navOpen);
    }
}
