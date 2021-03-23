const BitsoApi = require('bitso-bert-api').default

const getFullLedger = async (limit = 100, marker) => {
  let keepFetching = true
  let data = []
  do {
    const params = { limit, sort: 'asc' }
    if (marker) params.marker = marker

    const partialData = await BitsoApi.private.ledger.getLedger(params)
    if (partialData.length > 0) {
      marker = partialData[partialData.length - 1].eid
      data = [...data, ...partialData]
    }

    keepFetching = partialData.length !== 0
  } while (keepFetching)
  return data
}

exports.getFullLedger = getFullLedger
