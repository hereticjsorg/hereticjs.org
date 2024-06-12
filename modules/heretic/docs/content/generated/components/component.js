import Utils from "#lib/componentUtils";

export default class {
    onCreate(input, out) {
        this.state = {};
        this.language = out.global.language;
        if (process.browser) {
            window.__heretic = window.__heretic || {};
            window.__heretic.outGlobal = window.__heretic.outGlobal || out.global;
            this.language = this.language || window.__heretic.outGlobal.language;
        }
        this.utils = new Utils(this, this.language);
    }

    onComponentClick(e) {
        e.preventDefault();
        if (!e.target.closest("[data-id]")) {
            return;
        }
        const {
            id,
        } = e.target.closest("[data-id]").dataset;
        window.dispatchEvent(new CustomEvent("hrdclick", {
            detail: {
                id,
            },
            bubbles: false,
            cancelable: true,
            composed: false,
        }));
    }
}
