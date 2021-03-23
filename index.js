require('dotenv').config()
const jsonDiff = require('json-diff')
const fs = require('fs')
const del = require('del')
const { getFullLedger } = require('./utils')

const limits = [99, 100]
const path = `${__dirname}/data`

const main = async () => {
  await del(['csv'])
  if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true })

  const ledgers = []
  for (const limit of limits) {
    const filename = `${path}/ledger-${limit}.json`
    const data = await getFullLedger(limit)
    fs.writeFileSync(filename, JSON.stringify(data))
    ledgers.push(data)
  }

  const diff = jsonDiff.diffString(ledgers[0], ledgers[1])
  console.log(diff)
}

main()
