import Utils from "#lib/componentUtils";

export default class {
    onCreate(input, out) {
        this.state = {
            darkMode: process.browser && window.__heretic ? !!window.__heretic.darkMode : false,
        };
        this.language = out.global.language;
        if (process.browser) {
            window.__heretic = window.__heretic || {};
            window.__heretic.outGlobal = window.__heretic.outGlobal || out.global;
            this.language = this.language || window.__heretic.outGlobal.language;
        }
        this.utils = new Utils(this, this.language);
    }

    async onMount() {
        document.addEventListener("darkMode", () => {
            window.__heretic = window.__heretic || {};
            this.setState("darkMode", !!window.__heretic.darkMode);
        });
    }
}
