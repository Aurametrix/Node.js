var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({
  host: 'localhost:9200'
});
esclient.search({
  index: 'social-*',
  body: {
    query: {
      match: { message: 'myProduct' }
    },
    aggs: {
      top_10_states: {
        terms: {
            field: 'state',
            size: 10
        }
      }
    }
  }
}
).then(function (response) {
    var hits = response.hits.hits;
}
);
