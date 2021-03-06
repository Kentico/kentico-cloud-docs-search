import {
    InnerItemMarkStart,
    InnerItemMarkEnd,
    CodeSampleMarkStart,
    CodeSampleMarkEnd,
    PlatformMarkStart,
    PlatformMarkEnd,
    ContentChunkMarkStart,
    ContentChunkMarkEnd,
    ContentChunkHeadingMarkStart,
    ContentChunkHeadingMarkEnd
} from './richTextLabels';
import { resolveItemInRichText } from './richTextResolver';

const calloutItem: any = {
    system: {
        id: '59c40872-521f-4883-ae6e-4d11b77797e4',
        language: 'en-US',
        codename: 'premium_feature',
        type: 'callout'
    },
    content: {
        name: 'Content',
        value: '<p><strong>Premium feature</strong></p>\n<p>Features described on this page require the Professional plan or higher.</p>'
    },
    title: {
        name: 'Title',
        value: 'Premium feature'
    }
};

const contentChunkItem: any = {
    system: {
        id: '43e9af9c-569e-4c55-9025-a468bff5018b',
        language: 'en-US',
        codename: 'repeated_content',
        type: 'content_chunk'
    },
    content: {
        name: 'Content',
        value: '<h2>Repeated content</h2><p>This content is repeated in several Articles</p>'
    },
    platform: {
        value: [
            {
                codename: 'js'
            },
            {
                codename: 'typescript'
            },
            {
                codename: 'android'
            }
        ]
    }
};

const codeSampleItem: any = {
    system: {
        id: '0673f30a-cfe3-4bcf-85c4-dbb9c96288e8',
        language: 'en-US',
        codename: 'hello_world',
        type: 'code_sample'
    },
    code: {
        name: 'Code',
        value: 'alert( \'Hello, World!\' );'
    }
};

const codeSamplesItem: any = {
    system: {
        id: 'be3bda65-9857-4cfe-b01d-05eb8bc739be',
        language: 'en-US',
        codename: 'hello_world',
        type: 'code_samples'
    },
    codeSamples: {
        value: [
            {
                system: {
                    codename: 'first_sample',
                    type: 'code_sample'
                }
            },
            {
                system: {
                    codename: 'second_sample',
                    type: 'code_sample'
                }
            },
            {
                system: {
                    codename: 'hello_world',
                    type: 'code_sample'
                }
            }
        ]
    }
};

const differentItem: any = {
    ...calloutItem,
    system: {
        id: '59c40872-521f-4883-ae6e-4d11b77797e4',
        language: 'en-US',
        codename: 'premium_feature',
        type: 'article'
    }
};

describe('resolveItemInRichText', () => {
    it('returns sanitized value of a callout content item', () => {
        const expectedResult = `${InnerItemMarkStart}Premium feature\nFeatures described on this page require the Professional plan or higher.${InnerItemMarkEnd}`;

        const actualResult = resolveItemInRichText(calloutItem);

        expect(actualResult).toEqual(expectedResult);
    });

    it('returns empty string of a non callout content item', () => {
        const expectedResult = '';

        const actualResult = resolveItemInRichText(differentItem);

        expect(actualResult).toEqual(expectedResult);
    });

    it('returns value of a content chunk content item with a correctly marked heading', () => {
        const expectedResult =
            `${ContentChunkMarkStart}${PlatformMarkStart}js,typescript,android${PlatformMarkEnd}` +
            `${ContentChunkHeadingMarkStart}Repeated content${ContentChunkHeadingMarkEnd}` +
            `<p>This content is repeated in several Articles</p>${ContentChunkMarkEnd}`;

        const actualResult = resolveItemInRichText(contentChunkItem);

        expect(actualResult).toEqual(expectedResult);
    });

    it('returns value of a code sample item', () => {
        const expectedResult = `${CodeSampleMarkStart}${codeSampleItem.system.codename}${CodeSampleMarkEnd}`;

        const actualResult = resolveItemInRichText(codeSampleItem);

        expect(actualResult).toEqual(expectedResult);
    });

    it('resolves code samples item', () => {
        const expectedResult =
            `${CodeSampleMarkStart}first_sample${CodeSampleMarkEnd}` +
            `${CodeSampleMarkStart}second_sample${CodeSampleMarkEnd}` +
            `${CodeSampleMarkStart}hello_world${CodeSampleMarkEnd}`;

        const actualResult = resolveItemInRichText(codeSamplesItem);

        expect(actualResult).toEqual(expectedResult);
    });
});
