# Custom errors vs require: gas cost

## usage

```bash
yarn install
```

then comment out the line 44 in `./node_modules/eth-gas-reporter/lib/transactionWatcher.js` (ie removing `if (parseInt(receipt.status) === 0) return;`), in order to include the reverted transaction in the gas report.
then, in order to get data for both cases (transaction reverting or not), run :

```bash
REPORT_GAS=true yarn test ./test/gasOnSuccess.ts && REPORT_GAS=true yarn test ./test/gasOnFailure.ts
```
