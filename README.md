# Custom errors vs require: gas cost

## usage

```bash
yarn install
```
```bash
REPORT_GAS=true yarn test ./test/gasOnSuccess.ts
```

## Results: 
### Deployment:
![image](https://user-images.githubusercontent.com/83670532/146609500-a02b8934-75f6-40d7-a077-e814a3be3630.png)

### On transaction success:
![image](https://user-images.githubusercontent.com/83670532/146609471-49ac5987-10d9-4849-ae47-e7f889f10c2b.png)

### On transaction failure (revert or error()):
Coming soon ':)
