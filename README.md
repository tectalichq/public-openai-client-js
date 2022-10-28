# Tectalic OpenAI REST API Client

## Introduction

The **Tectalic OpenAI REST API Client** is a package that provides a convenient and straightforward way to interact with the **OpenAI API** from your JavaScript application.

More information is available from [https://tectalic.com/apis/openai](https://tectalic.com/apis/openai).

## Installation

### Package Installation

Install the package into your project:

```shell
npm install @tectalic/openai --save-dev
```

## Usage

You can use the following code sample and customize it to suit your application.


```js
const tectalicOpenai = require('@tectalic/openai').default;

// Build a Tectalic OpenAI REST API Client.
const openaiClient = tectalicOpenai('token');
```

### Authentication

Authentication to the **OpenAI API** is by HTTP Bearer authentication.

Please see the OpenAI API documentation for more details on obtaining your authentication credentials.

In the **Usage** code above, customize the `tectalicOpenai` tectalicOpenai argument to your needs. For example, you may wish to define your credentials in an environment variable.

### Client Object

The primary way to interact with the library is the `openaiClient` object.

This `openaiClient` object contains the properties that let you quickly access the 1 API Handlers.

Please see below for a complete list of supported handlers and methods.

### Supported API Handlers and Methods

This package supports 1 API Methods, which are grouped into 1 API Handlers.

See the table below for a full list of API Handlers and Methods.


| API Handler Class and Method Name | Description                                                 | API Verb and URL      |
| --------------------------------- | ----------------------------------------------------------- | --------------------- |
| `.completions.create()`           | Creates a completion for the provided prompt and parameters | `POST` `/completions` |


### Making a Request

You can access all API Handlers from the client class using the Client class:

```js
openaiClient.completions.create({
  model: 'text-davinci-002',
  prompt: 'Will using a third party package save time?'
});
```

### Retrieving the Response

Once you have made a request, it will result in a `Promise`

Example:
```js
instance.completions.create({ ... }).then((response) => {
    console.log(response.data.choices[0].text.trim());
})
// Using a third party package can save time because you don't have to write the code yourself.
```

## Tests

The **Tectalic OpenAI REST API Client** package uses jest for automated tests to verify the correct operation.

To run these tests, you will need to have cloned the **Tectalic OpenAI REST API Client** package and install its dev dependencies.

These tests are designed to:

- confirm that each API Method assembles a valid request that matches the OpenAI API OpenAPI specification.
- verify the behaviour of other parts of the package, such as the `Client` class.

The unit tests can be run using the following command, which needs to be run from this package's root directory.

```shell
npm test
```

## Support

If you have any questions or feedback, please use the [discussion board](https://github.com/tectalichq/public-openai-client-js/discussions).

## License

This software is copyright (c) 2022 [Tectalic](https://tectalic.com).

For copyright and license information, please view the [LICENSE](LICENSE) file.
