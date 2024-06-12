import binHereticInstall from "#src/bin/heretic.sh";

export default () => ({
    async handler(req, rep) {
        try {
            await rep.code(200).headers({
                "Content-Disposition": `attachment; filename="heretic.sh"`,
                "Content-Type": "text/x-shellscript",
            }).send(binHereticInstall);
        } catch (e) {
            this.log.error(e);
            return Promise.reject(e);
        }
    }
});
