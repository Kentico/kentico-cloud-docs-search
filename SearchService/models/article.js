var KenticoCloud = require('kentico-cloud-delivery');

/**
* This class was generated by 'kentico-cloud-model-generator-utility' at Wed Dec 05 2018 15:54:11 GMT+0100 (GMT+01:00).
*/
class Article extends KenticoCloud.ContentItem {
        constructor() {
        super({
            propertyResolver: ((fieldName) => {
                if (fieldName === 'content_layout') {
                    return 'contentLayout';
                }
                if (fieldName === 'content_type') {
                    return 'contentType';
                }
                if (fieldName === 'short_title') {
                    return 'shortTitle';
                }
                if (fieldName === 'next_step') {
                    return 'nextStep';
                }
                if (fieldName === 'vanity_urls') {
                    return 'vanityUrls';
                }
                if (fieldName === 'previous_step') {
                    return 'previousStep';
                }
                return fieldName;
            })
        });
    }
}

module.exports = Article;
