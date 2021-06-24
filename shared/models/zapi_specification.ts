
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiSpecification extends ContentItem {
    public title!: Elements.TextElement;
    public description!: Elements.RichTextElement;
    public categories!: Elements.LinkedItemsElement<ContentItem>;
    public security!: Elements.LinkedItemsElement<ContentItem>;
    public servers!: Elements.RichTextElement;
    public version!: Elements.TextElement;
    public apiStatus!: Elements.MultipleChoiceElement;
    public termsOfService!: Elements.TextElement;
    public license!: Elements.LinkedItemsElement<ContentItem>;
    public contact!: Elements.LinkedItemsElement<ContentItem>;
    public url!: Elements.UrlSlugElement;
    public redirectUrls!: Elements.TextElement;
    public apiReference!: Elements.TaxonomyElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'api_status') {
                    return 'apiStatus';
                }
                if (elementName === 'terms_of_service') {
                    return 'termsOfService';
                }
                if (elementName === 'redirect_urls') {
                    return 'redirectUrls';
                }
                if (elementName === 'api_reference') {
                    return 'apiReference';
                }
                return elementName;
            })
        });
    }
}