import {
    getPlatformLabel,
    getInnerItemLabel,
    getCodeSampleLabel,
    getContentChunkLabel,
    PlatformMarkStart,
    PlatformMarkEnd,
    InnerItemMarkStart,
    InnerItemMarkEnd,
    CodeSampleMarkStart,
    CodeSampleMarkEnd,
    ContentChunkMarkStart,
    ContentChunkMarkEnd
} from './richTextLabels';

describe('getPlatformLabel', () => {
    it('labels a single platform correctly', () => {
        const platform: any = [
            {
                codename: '_net'
            }
        ];
        const expectedResult = `${PlatformMarkStart}_net${PlatformMarkEnd}`;

        const actualResult = getPlatformLabel(platform);

        expect(actualResult).toEqual(expectedResult);
    });

    it('labels multiple platforms correctly', () => {
        const platform: any = [
            {
                codename: '_net'
            },
            {
                codename: 'android'
            },
            {
                codename: 'javascript'
            }
        ];
        const expectedResult = `${PlatformMarkStart}_net,android,javascript${PlatformMarkEnd}`;

        const actualResult = getPlatformLabel(platform);

        expect(actualResult).toEqual(expectedResult);
    });

    it('returns empty string for an empty platform array', () => {
        const platform: any = [];
        const expectedResult = '';

        const actualResult = getPlatformLabel(platform);

        expect(actualResult).toEqual(expectedResult);
    });
});

describe('getContentChunkLabel', () => {
    it('labels content chunk correctly', () => {
        const contentChunkContent = 'some text in content chunk item';
        const expectedResult = `${ContentChunkMarkStart}some text in content chunk item${ContentChunkMarkEnd}`;

        const actualResult = getContentChunkLabel(contentChunkContent);

        expect(actualResult).toEqual(expectedResult);
    });
});

describe('getInnerItemLabel', () => {
    it('labels the content correctly', () => {
        const innerItemContent: any = 'some important content';
        const expectedResult = `${InnerItemMarkStart}some important content${InnerItemMarkEnd}`;

        const actualResult = getInnerItemLabel(innerItemContent, false);

        expect(actualResult).toEqual(expectedResult);
    });
});

describe('getCodeSampleLabel', () => {
    it('labels the codename correctly', () => {
        const codeSampleCodename = 'hello_world';
        const expectedResult = `${CodeSampleMarkStart}hello_world${CodeSampleMarkEnd}`;

        const actualResult = getCodeSampleLabel(codeSampleCodename);

        expect(actualResult).toEqual(expectedResult);
    });
});
