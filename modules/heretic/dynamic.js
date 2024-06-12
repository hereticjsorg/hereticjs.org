const fs = require("fs-extra");
const path = require("path");
const areasData = require("./data/areas.json");

const areasFlat = [];
areasData.map(i => {
    if (i.subMenu) {
        i.subMenu.map(si => areasFlat.push(si));
        delete i.subMenu;
    }
    if (i.area) {
        areasFlat.push(i);
    }
});

module.exports = async () => {
    const docsServerTemplate1 = `\n$ {\n    const areas = [];
    areasData.map(i => {
        if (i.subMenu) {
            i.subMenu.map(si => areas.push(si.area));
        }
        if (i.area) {
            areas.push(i.area);
        }
    });
}\n<view>
    <content/>
    <if(out.global.queryString && out.global.queryString.area && areas.indexOf(out.global.queryString.area) >= 0)>
        <div style={
            width: "1px",
            height: "1px",
            position: "absolute",
            opacity: "0",
            left: "-9999px",
            top: "-9999px",
            overflow: "hidden"
        }>\n`;
    const docsServerTemplate2 = `        </div>
    </if>
</view>\n`;
    let docsServerMarko = `import areasData from "../data/areas.json"\n`;
    for (const item of areasFlat) {
        docsServerMarko += `import ${item.area} from "./content/generated/${item.area}/index.marko"\n`;
    }
    docsServerMarko += docsServerTemplate1;
    for (const item of areasFlat) {
        docsServerMarko += `            <\${out.global.queryString.area === "${item.area}" ? ${item.area} : ""}/>\n`;
    }
    docsServerMarko += docsServerTemplate2;
    await fs.writeFile(path.resolve(`${__dirname}/docs/server.marko`), docsServerMarko);
    for (const item of areasFlat.filter(i => !i.static)) {
        const areaComponentMarko = `import data from "../../../../data/${item.area}.js"\n\n<render data=data/>\n`;
        await fs.ensureDir(path.resolve(`${__dirname}/docs/content/generated/${item.area}`));
        await fs.writeFile(path.resolve(`${__dirname}/docs/content/generated/${item.area}/index.marko`), areaComponentMarko);
    }
    let docsLoaderTemplate = `export default class {\n    static async loadArea(area) {\n        switch (area) {\n`;
    for (const item of areasFlat) {
        docsLoaderTemplate += `        case "${item.area}":\n            return import( /* webpackChunkName: "page.heretic.docs.${item.area}" */ "./${item.area}/index.marko");\n`;
    }
    docsLoaderTemplate += `        }\n    }\n}\n`;
    await fs.writeFile(path.resolve(`${__dirname}/docs/content/generated/loader.js`), docsLoaderTemplate);
    const images = await fs.readdir(path.resolve(`${__dirname}/docs/content/images`));
    let docsImagesTemplate = `export default class {\n    static async loadImage(area) {\n        switch (area) {\n`;
    for (const i of images) {
        docsImagesTemplate += `        case "${i}":\n            return import( /* webpackChunkName: "page.heretic.docs.image.${path.parse(i).name}" */ "../images/${i}");\n`;
    }
    docsImagesTemplate += `        }\n    }\n}\n`;
    await fs.writeFile(path.resolve(`${__dirname}/docs/content/generated/images.js`), docsImagesTemplate);
};
