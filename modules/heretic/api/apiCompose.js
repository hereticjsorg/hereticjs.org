import binDockerCompose from "#src/bin/docker-compose.sh";

export default () => ({
    async handler(req, rep) {
        try {
            await rep.code(200).headers({
                "Content-Disposition": `attachment; filename="docker-compose.sh"`,
                "Content-Type": "text/x-shellscript",
            }).send(binDockerCompose);
        } catch (e) {
            this.log.error(e);
            return Promise.reject(e);
        }
    }
});
