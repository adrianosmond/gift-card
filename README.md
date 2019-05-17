# Gift Card

Simulate adding a gift card during a checkout flow. In order to run it locally, run the following steps in your terminal of choice from inside the project directory:
- `npm i`
- `npm i -g json-server` (if you don't already have json-server installed)
- `json-server codes.json --port 3001`
- `npm run start` (in another terminal tab)
- If one doesn't open automatically, open a browser at [http://localhost:3000/](http://localhost:3000/)

There are 10 working gift card numbers and they all work with any control code:
- 1234567890123456789
- 2345678901234567890
- 3456789012345678901
- 4567890123456789012
- 5678901234567890123
- 6789012345678901234
- 7890123456789012345
- 8901234567890123456
- 9012345678901234567
- 0123456789012345678

## Todo
- Number internationalisation (the design has -€20,00 instead of -€20.00)
- Comprehensive legacy browser testing
- Create a plan for style reuse (some sort of theme / style guide) when more designs are available
- Write tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
