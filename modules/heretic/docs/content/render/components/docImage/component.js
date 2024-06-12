import Loader from "../../../generated/images.js";

export default class {
    onCreate() {
        this.state = {
            imgSource: "",
        };
    }

    async onMount() {
        const imgSource = (await Loader.loadImage(this.input.src)).default;
        this.setState("imgSource", imgSource);
    }
}
