# bitso ledger bug report

### Bug to report

When fetching all the ledger though iterating with the marker query param, we get different results depending on the limit that we set, in this example we are using 99 and 100 as limits.

### Getting started

##### Configure the environment variables

You will need the following environment variables in your project (you can use the `.env.example` file)

```
BITSO_API_KEY=""
BITSO_API_SECRET=""
BITSO_API_URL="https://api.bitso.com"
```

##### Install dependencies

```bash
$ yarn
```

##### Run the script

```bash
$ yarn start
```
