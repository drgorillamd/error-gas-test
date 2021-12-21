# Custom errors vs require: gas cost

## usage

```bash
yarn install
```

```bash
yarn test
```

## To add another error type

Copy one of the contracts in ./contracts and add your template (make sure to ONLY include a custom error/revert, keeping the rest of the contract identical in order to proceed to an apple-to-apple comparison)

## Results:

Summary:
┌──────────────────────┬────────────┬─────────┬─────────┐
│ (index) │ deployment │ failed │ success │
├──────────────────────┼────────────┼─────────┼─────────┤
│ errorLongName │ '86445' │ '21483' │ '43562' │
│ errorOneArg │ '88179' │ '21501' │ '43562' │
│ errorOneNamedArg │ '88179' │ '21501' │ '43562' │
│ errorOneString │ '97557' │ '21537' │ '43562' │
│ errorThreeArgs │ '91635' │ '21537' │ '43562' │
│ errorTwoArgs │ '89691' │ '21519' │ '43562' │
│ errorWithoutArgs │ '86445' │ '21483' │ '43562' │
│ requireWithString │ '97161' │ '21537' │ '43562' │
│ requireWithoutString │ '82113' │ '21438' │ '43562' │
└──────────────────────┴────────────┴─────────┴─────────┘
