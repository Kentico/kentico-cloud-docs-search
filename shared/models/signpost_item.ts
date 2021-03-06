
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class SignpostItem extends ContentItem {
    public linkLinkToContentItem!: Elements.LinkedItemsElement<ContentItem>;
    public image!: Elements.AssetsElement;
    public title!: Elements.TextElement;
    public linkLinkToWebUrl!: Elements.TextElement;
    public description!: Elements.RichTextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'link__link_to_content_item') {
                    return 'linkLinkToContentItem';
                }
                if (elementName === 'link__link_to_web_url') {
                    return 'linkLinkToWebUrl';
                }
                return elementName;
            })
        });
    }
}
