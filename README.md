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

## Results: 
### Deployment:
![image](https://user-images.githubusercontent.com/83670532/146609500-a02b8934-75f6-40d7-a077-e814a3be3630.png)

### On transaction success:
![image](https://user-images.githubusercontent.com/83670532/146609471-49ac5987-10d9-4849-ae47-e7f889f10c2b.png)

### On transaction failure (revert or error()):
![image](https://user-images.githubusercontent.com/83670532/146609554-edc1ec23-b404-4a7c-b1e5-ba9d9c7b1387.png)
