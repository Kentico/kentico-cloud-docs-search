
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class EmbeddedContent extends ContentItem {
    public title!: Elements.TextElement;
    public zoomable!: Elements.MultipleChoiceElement;
    public caption!: Elements.RichTextElement;
    public provider!: Elements.MultipleChoiceElement;
    public captionTitle!: Elements.RichTextElement;
    public id!: Elements.TextElement;
    public width!: Elements.MultipleChoiceElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'caption_title') {
                    return 'captionTitle';
                }
                return elementName;
            })
        });
    }
}
