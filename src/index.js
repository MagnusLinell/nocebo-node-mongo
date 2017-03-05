const mongoose = require('mongoose');
const logger = require('winston');

const validateOptions = (options) => {
    if (!options) {
        throw Error("argument options {} must be set");
    }
    if (!options.url) {
        throw Error("argument {url: [mongodb connection url]} must be set");
    }
    if (!options.collection) {
        throw Error("argument {collection: [mongodb collection]} must be set");
    }
    if (!options.schema) {
        throw Error("argument {schema: [mongodb schema]} must be set");
    }
};

module.exports = (options) => {
    validateOptions(options);

    mongoose.connect(options.url);
    mongoose.Promise = global.Promise;

    logger.info('mongodb connection established');

    return mongoose.model(options.collection, options.schema);
};
