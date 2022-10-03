import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'r87913w3y0ue',
    accessToken: 'gPk4UG2-rOUctPmTX6CzncoooCDEBunxKR-3EznKZBA'
});

export const getTopHeroContent = () => client.getEntries({content_type: 'topHero'}).then(response => response.items.map(item => item.fields));

export const getBottomHeroContent = () => client.getEntries({content_type: 'bottomHero'}).then(response => response.items.map(item => item.fields));

export const getFaqContent = () => client.getEntries({content_type: 'faq'}).then((response) => response.items.map(item => item.fields));

export const getFooterDetails = () => client.getEntry('3L944lfII8bwxnG40qmo6g').then(response => response.fields);

export const getFooterSocialLinks = () => client.getEntry('1BXED1EVu1cI9UjszsO90Y').then(response => response.fields);

export const getFooterQuickLinks = () => client.getEntry('29eFkSpfsIphzpvlNu5bXu').then(response => response.fields);

export const getFeatureAttend = () => client.getEntry('34aFleg34Zm5IRRfQZcXEy').then(response => response.fields);

export const getFeatureStayUpdated = () => client.getEntry('QCwUMmYbfeMLeizI5ZfaK').then(response => response.fields);

export const getFeatureLearn = () => client.getEntry('zem1Wuqe2nIvb0BQmOboK').then(response => response.fields);

export const getAllFeatures = () => client.getEntries({content_type: 'features'}).then(response => response.items.map(item => item.fields));

export const getFeaturedContentImages = () => client.getEntries({content_type: 'featuredContentImages'}).then(response => {
    return response.items[0].fields.image.map((image) => image.fields.file.url);
});