
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiSecurityScheme extends ContentItem {
    public name!: Elements.TextElement;
    public type!: Elements.MultipleChoiceElement;
    public description!: Elements.RichTextElement;
    public scheme!: Elements.TextElement;
    public bearerFormat!: Elements.TextElement;
    public apiKeyLocation!: Elements.MultipleChoiceElement;
    public apiKeyName!: Elements.TextElement;
    public apiReference!: Elements.TaxonomyElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'bearer_format') {
                    return 'bearerFormat';
                }
                if (elementName === 'api_key_location') {
                    return 'apiKeyLocation';
                }
                if (elementName === 'api_key_name') {
                    return 'apiKeyName';
                }
                if (elementName === 'api_reference') {
                    return 'apiReference';
                }
                return elementName;
            })
        });
    }
}
