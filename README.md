## Installation

To install the library, run the following command from the root of your project's directory:

```
npm i affise-js
```

----

# affise-js

An open source library for the affise.com marketing platform

**Description**:
An open source library for the affise.com marketing platform.
Affise-js is a wrapper for the Affise API.
Built on the experience of using the Affise API, Affise-js provides simple and intuitive toolset for interacting with the API.

Other things to include:
- Written in TypeScript.
- Currently, in alpha stage.

## Dependencies

- [nodejs](https://nodejs.org/) (v10.x or higher)
- [axios](https://www.npmjs.com/package/axios) (v0.26.0 or higher)


## Usage

- [ApiRunner](src/apiRunner.ts) Example: 

```
import {ApiRunner, ConversionStatus} from "affise-js";

const runner = new ApiRunner("https://api.affise.com/3.0/", "YOUR_API_KEY");

await runner.importConversion({
    click_id: 0,
    offer: 0,
    pid: 1,
    status: ConversionStatus.CONFIRMED,
    goal: 1
})

await runner.editConversions([2, 3, 4], {
    status: ConversionStatus.DECLINED,
    currency: "USD",
    payouts: 1,
    revenue: 1,
    comment: "comment"
})
```


## Known issues


## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.
If you can provide a solution to said issue feel free to open a PR.

## Getting involved

----

## Open source licensing info
1. [LICENSE](LICENSE)