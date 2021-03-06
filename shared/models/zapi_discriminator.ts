
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiDiscriminator extends ContentItem {
    public mapping!: Elements.RichTextElement;
    public propertyName!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'property_name') {
                    return 'propertyName';
                }
                return elementName;
            })
        });
    }
}
