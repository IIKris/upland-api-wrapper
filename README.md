# Upland API Wrapper
This repository contains a TypeScript API Wrapper for the Upland API, which is a powerful and flexible solution for interacting with the Upland game. The wrapper handles paginated data from the API efficiently and makes it easy to fetch and manage data.

## Features
- Fetching data from the Upland API
- Covers all endpoints
- Seamless integration and easy-to-use functions

## Installation
To install the Upland API Wrapper, run the following command:
```bash
npm install @ikris/upland-api-wrapper
```

## Usage
This package supports both CommonJS and ES Modules. To use the package, import it into your project:
```js
// ES Modules
import { DeveloperAPI, PublicAPI } from '@ikris/upland-api-wrapper';

// CommonJS
const { DeveloperAPI, PublicAPI } = require('@ikris/upland-api-wrapper');
```

### Developer API
The Developer API is used to interact with the Upland Developer API. To use the Developer API, create a new instance of the DeveloperAPI class:
```js
const devAPI = new DeveloperAPI(APPLICATION_ID, 'YOUR-APPLICATION-KEY', SANDBOX); // SANDBOX is a boolean
```

Further examples can be found in the full documentation [here](docs/md/modules.md).

### Public API
The Public API currently only supports one endpoint, which is used to check if upland is currently in maintenance mode.
```js
const maintenance = await PublicAPI.isMaintenance();
```

## Documentation
The full documentation can be found [here](docs/md/modules.md)

## Tests
The tests are not yet fully implemented.