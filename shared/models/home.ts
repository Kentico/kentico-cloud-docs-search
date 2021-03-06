
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Home extends ContentItem {
    public support!: Elements.RichTextElement;
    public title!: Elements.TextElement;
    public description!: Elements.RichTextElement;
    public navigation!: Elements.LinkedItemsElement<ContentItem>;
    public introNote!: Elements.RichTextElement;
    public signposts!: Elements.RichTextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'intro_note') {
                    return 'introNote';
                }
                return elementName;
            })
        });
    }
}
