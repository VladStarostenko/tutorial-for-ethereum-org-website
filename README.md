This is the code for a tutorial for the ethereum-org website about `Waffle`.

In this tutorial I show how to use `Waffle` matchers to testing smart contracts. 

Full tutorial you can read [here](https://ethereum.org/en/developers/tutorials/using-smart-contract-matchers/)

<details>
<summary>package.json</summary>

    {
      "name": "tutorial",
      "version": "1.0.0",
      "main": "index.js",
      "license": "MIT",
      "scripts": {
        "test": "export NODE_ENV=test && mocha",
        "lint": "eslint '{src,test}/**/*.ts'",
        "lint:fix": "eslint --fix '{src,test}/**/*.ts'",
        "build": "waffle"
      },
      "devDependencies": {
        "@types/mocha": "^5.2.7",
        "@typescript-eslint/eslint-plugin": "^2.30.0",
        "@typescript-eslint/parser": "^2.30.0",
        "eslint": "^6.8.0",
        "eslint-plugin-import": "^2.20.2",
        "ethers": "^5.0.17",
        "mocha": "^7.1.2",
        "ts-node": "^8.9.1",
        "typescript": "^3.8.3"
      }
    }

</details>
