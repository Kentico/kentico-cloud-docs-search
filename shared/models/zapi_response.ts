
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiResponse extends ContentItem {
    public httpStatus!: Elements.MultipleChoiceElement;
    public description!: Elements.RichTextElement;
    public headers!: Elements.LinkedItemsElement<ContentItem>;
    public mediaType!: Elements.MultipleChoiceElement;
    public schema!: Elements.RichTextElement;
    public example!: Elements.TextElement;
    public apiReference!: Elements.TaxonomyElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'http_status') {
                    return 'httpStatus';
                }
                if (elementName === 'media_type') {
                    return 'mediaType';
                }
                if (elementName === 'api_reference') {
                    return 'apiReference';
                }
                return elementName;
            })
        });
    }
}