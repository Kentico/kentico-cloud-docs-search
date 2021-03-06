
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class RedirectRule extends ContentItem {
    public redirectTo!: Elements.TextElement;
    public redirectFrom!: Elements.TextElement;
    public whyDoesThisRedirectExist!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'redirect_to') {
                    return 'redirectTo';
                }
                if (elementName === 'redirect_from') {
                    return 'redirectFrom';
                }
                if (elementName === 'why_does_this_redirect_exist_') {
                    return 'whyDoesThisRedirectExist';
                }
                return elementName;
            })
        });
    }
}
