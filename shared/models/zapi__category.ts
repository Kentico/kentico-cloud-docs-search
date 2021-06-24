
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiCategory extends ContentItem {
    public name!: Elements.TextElement;
    public description!: Elements.RichTextElement;
    public pathOperations!: Elements.LinkedItemsElement<ContentItem>;
    public url!: Elements.UrlSlugElement;
    public apiReference!: Elements.TaxonomyElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'path_operations') {
                    return 'pathOperations';
                }
                if (elementName === 'api_reference') {
                    return 'apiReference';
                }
                return elementName;
            })
        });
    }
}