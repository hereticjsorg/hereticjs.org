import pageConfig from "../../page.js";

export default class {
    onCreate() {
        this.state = {};
    }

    onClick(e) {
        const target = e.target || e.srcElement;
        if (!window.__heretic.routingStop && target.tagName === "A") {
            const area = target.getAttribute("area");
            if (area) {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("hrdclick", {
                    detail: {
                        id: area,
                    },
                    bubbles: false,
                    cancelable: true,
                    composed: false,
                }));
                window.history.pushState({
                    area,
                }, document.title, `${pageConfig.url}?area=${area}`);
            }
        }
    }
}
