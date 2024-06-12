export default class {
    onCreate() {
        this.state = {};
    }

    async onCopyClick(e) {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(this.input.code);
            window.dispatchEvent(new CustomEvent("hrdnotify", {
                detail: {
                    message: "copiedToClipboard",
                },
                bubbles: false,
                cancelable: true,
                composed: false,
            }));
        } catch {
            // Ignore
        }
    }
}
