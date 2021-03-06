
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Image extends ContentItem {
    public zoomable!: Elements.MultipleChoiceElement;
    public notes!: Elements.RichTextElement;
    public description!: Elements.RichTextElement;
    public imageWidth!: Elements.MultipleChoiceElement;
    public url!: Elements.TextElement;
    public layout!: Elements.MultipleChoiceElement;
    public image!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'image_width') {
                    return 'imageWidth';
                }
                return elementName;
            })
        });
    }
}
