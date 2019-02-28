const KenticoCloud = require('kentico-cloud-delivery');

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Thu Feb 28 2019 11:12:41 GMT+0100 (GMT+01:00).
 */
class Instructions extends KenticoCloud.ContentItem {
    constructor() {
        super({
            propertyResolver: ((fieldName) => {
                if (fieldName === 'programming_language') {
                    return 'programmingLanguage';
                }
                return fieldName;
            })
        });
    }
}

module.exports = Instructions;
