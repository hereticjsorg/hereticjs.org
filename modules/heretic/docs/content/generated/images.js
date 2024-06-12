export default class {
    static async loadImage(area) {
        switch (area) {
        case "compose.png":
            return import( /* webpackChunkName: "page.heretic.docs.image.compose" */ "../images/compose.png");
        }
    }
}
