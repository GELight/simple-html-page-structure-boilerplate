"use strict";

class SmlHtmlBuilder {
    constructor(SmlDocument) {
        this.doc = SmlDocument;
        this.CHILDREN_ELEMENT_NAME = "Children";
        this.TEXT_CONTENT_VALUES_JOIN = "\n";
        this.domString = this.generateDom(this.doc.getRoot().getElements(this.CHILDREN_ELEMENT_NAME));
        return this;
    }

    generateDom(childrenElements) {
        let domString = "";

        for (const element of childrenElements) {
            for (const component of element.nodes) {
                const tagName = component.name.toLowerCase();
                const attrs = [];
                let textContent = "";
                let childrenContent = "";

                for (const attr of component.getAttributes()) {
                    if (attr.name.toLowerCase() === "text") {
                        textContent = `<div>${attr.getValues().join(this.TEXT_CONTENT_VALUES_JOIN)}</div>`;
                    } else {
                        let attribute = {};
                        attribute[attr.name.toLowerCase()] = attr.getValues().join(" ");
                        attrs.push(attribute);
                    }
                }

                if (component.hasElement(this.CHILDREN_ELEMENT_NAME)) {
                    childrenContent = this.generateDom(component.getElements(this.CHILDREN_ELEMENT_NAME));
                }

                const openTag = `<${tagName} ${this.getAttributesAsString(attrs)}>`;
                const closeTag = `</${tagName}>`;

                domString = domString.concat(openTag, textContent, childrenContent, closeTag);
            }
        }

        return domString;
    }

    getAttributesAsString(attrs) {
        const attributes = attrs.map((a) => {
            return `${Object.keys(a)}="${a[Object.keys(a)]}"`;
        });
        return attributes.join(" ");
    }

    htmlToElements(html) {
        let template = document.createElement("template");
        template.innerHTML = html;
        return template.content.childNodes;
    }

    mount(target) {
        const dataSmlContent = document.querySelector(target);
        if (this.domString.length) {
            dataSmlContent.insertAdjacentHTML("beforeend", this.domString);
        }
    }
}
