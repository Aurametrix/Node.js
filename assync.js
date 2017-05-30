const writeFile = util.promisify(fs.writeFile),
    request = util.promisify('superagent'),
    stat = util.promisify(fs.stat),
    sorts = require('sorts'),
    log = console.log.bind(console)

  const getJeansAndSaveThem = async function(){ 
    var jeans = await request.get('https://example.com/api/v1/product/trousers').query({
      label: 'Levi Strauss', 
      isInStock: true,
      maxResults: 500
    }).end()
    jeans = jeans.sort(sorts.alphabetical)
    await writeFile('jeans.json', jeans)
    const status = await stat('jeans.json');
    log(`I just got some data from an API and saved the results to a file. The file was born at ${status.birthtime}`)
  }
