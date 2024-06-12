import apiCompose from "./apiCompose";
import apiInstall from "./apiInstall";

export default fastify => {
    fastify.get(`/compose`, apiCompose());
    fastify.get(`/install`, apiInstall());
};
