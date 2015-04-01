/**
 * DataSources
 */

var loopback = require('loopback');

var config = require('rc')('loopback');
config = config.recipes || {};

var dataSources = {};

module.exports = function(dataSourceName) {
    dataSourceName = dataSourceName || process.env.DB || 'memory';
    if(dataSources[dataSourceName]) {
        return dataSources[dataSourceName];
    }
    var dataSourceConfig = config[dataSourceName];
    if(!dataSourceConfig) {
        console.error('DataSource definition not found:', dataSourceName);
        return null;
    }

    dataSourceConfig.connector = dataSourceName === 'memory' ? loopback.Memory : 'loopback-connector-' + dataSourceName;

    // console.log(dataSourceConfig);
    dataSources[dataSourceName] = loopback.createDataSource(dataSourceName, dataSourceConfig);
    return dataSources[dataSourceName];
}

/*
if(DB === 'memory') {
  // import data
  require('../test-data/import');
}
*/
