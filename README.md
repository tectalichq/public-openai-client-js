# Tectalic OpenAI REST API Client

## Introduction

The **Tectalic OpenAI REST API Client** is a package that provides a convenient and straightforward way to interact with the **OpenAI API** from your JavaScript application.

Supports **GPT-3**, **Codex** and **DALL·E** based models, fully typed Data Transfer Objects (DTOs) for all requests and responses and IDE autocomplete support.

More information is available from [https://tectalic.com/apis/openai](https://tectalic.com/apis/openai).

**This is an unofficial package and has no affiliations with OpenAI.**

## Examples

Integrating OpenAI into your application is now as simple as a few lines of code.

### Text Completion using GPT-3

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .completions.create({
    model: 'text-davinci-002',
    prompt: 'Will using a third party package save time?'
  })
  .then((response) => {
    console.log(response.data.choices[0].text.trim());
  });
// Using a third party package can save time because you don't have to write the code yourself.
```

[Learn more about text completion](https://beta.openai.com/docs/guides/completion).

### Code Completion Using Codex

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .completions.create({
    model: 'code-davinci-002',
    prompt: '/* Create a JavaScript variable that saves the current date and time */',
    max_tokens: 256,
    stop: ';'
  })
  .then((response) => {
    console.log(response.data.choices[0].text.trim());
  });
// var currentDate = new Date();
```

[Learn more about code completion](https://beta.openai.com/docs/guides/code).

### Image Generation Using DALL·E

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .imagesGenerations.create({
    prompt: 'A cute baby sea otter wearing a hat',
    size: '256x256',
    n: 3
  })
  .then((response) => {
    response.data.data.forEach((image) => console.log(image.url));
  });
// https://oaidalleapiprodscus.blob.core.windows.net/private/...
// https://oaidalleapiprodscus.blob.core.windows.net/private/...
// https://oaidalleapiprodscus.blob.core.windows.net/private/...
```

[Learn more about image generation](https://beta.openai.com/docs/guides/images).

## Installation

### Package Installation

Install the package into your project:

```shell
npm install @tectalic/openai --save
```

## Usage

You can use the following code sample and customize it to suit your application.

```js
const tectalicOpenai = require('@tectalic/openai').default;

// Build a Tectalic OpenAI REST API Client.
const openaiClient = tectalicOpenai(process.env.OPENAI_API_KEY);
```

### Authentication

Authentication to the **OpenAI API** is by HTTP Bearer authentication.

Please see the OpenAI API documentation for more details on obtaining your authentication credentials.

In the **Usage** code above, customize the `tectalicOpenai` argument to your needs. For example, will likely need to add a `OPENAI_API_KEY` environment variable to your system.

### Client Object

The primary way to interact with the library is the `openaiClient` object.

This `openaiClient` object contains the properties that let you quickly access the 1 API Handlers.

Please see below for a complete list of supported handlers and methods.

### Supported API Handlers and Methods

This package supports 20 API Methods, which are grouped into 13 API Handlers.

See the table below for a full list of API Handlers and Methods.

| API Handler Class and Method Name   | Description                                                                                                             | API Verb and URL                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `.completions.create()`             | Creates a completion for the provided prompt and parameters                                                             | `POST` `/completions`                      |
| `.edits.create()`                   | Creates a new edit for the provided input, instruction, and parameters                                                  | `POST` `/edits`                            |
| `.embeddings.create()`              | Creates an embedding vector representing the input text.                                                                | `POST` `/embeddings`                       |
| `.files.list()`                     | Returns a list of files that belong to the user's organization.                                                         | `GET` `/files`                             |
| `.files.create()`                   | Upload a file that contains document(s) to be used across various endpoints/features.                                   | `POST` `/files`                            |
| `.files.retrieve()`                 | Returns information about a specific file.                                                                              | `GET` `/files/{file_id}`                   |
| `.files.delete()`                   | Delete a file.                                                                                                          | `DELETE` `/files/{file_id}`                |
| `.filesContent.download()`          | Returns the contents of the specified file                                                                              | `GET` `/files/{file_id}/content`           |
| `.fineTunes.list()`                 | List your organization's fine-tuning jobs                                                                               | `GET` `/fine-tunes`                        |
| `.fineTunes.create()`               | Creates a job that fine-tunes a specified model from a given dataset.                                                   | `POST` `/fine-tunes`                       |
| `.fineTunes.retrieve()`             | Gets info about the fine-tune job.                                                                                      | `POST` `/fine-tunes`                       |
| `.fineTunesCancel.cancelFineTune()` | Immediately cancel a fine-tune job.                                                                                     | `POST` `/fine-tunes/{fine_tune_id}/cancel` |
| `.fineTunesEvents.listFineTune()`   | Get fine-grained status updates for a fine-tune job.                                                                    | `GET` `/fine-tunes/{fine_tune_id}/events`  |
| `.imagesEdits.createImage()`        | Creates an edited or extended image given an original image and a prompt.                                               | `POST` `/images/edits`                     |
| `.imagesGenerations.create()`       | Creates an image given a prompt.                                                                                        | `POST` `/images/generations`               |
| `.imagesVariations.createImage()`   | Creates a variation of a given image.                                                                                   | `POST` `/images/variations`                |
| `.models.list()`                    | Lists the currently available models, and provides basic information about each one such as the owner and availability. | `GET` `/models`                            |
| `.models.retrieve()`                | Retrieves a model instance, providing basic information about the model such as the owner and permissioning.            | `GET` `/models/{model}`                    |
| `.models.delete()`                  | Delete a fine-tuned model. You must have the Owner role in your organization.                                           | `DELETE` `/models/{model}`                 |
| `.moderations.create()`             | Classifies if text violates OpenAI's Content Policy                                                                     | `POST` `/moderations`                      |

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
openaiClient.completions.create({ ... }).then((response) => {
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

The tests can be run using the following command, which needs to be run from this package's root directory.

```shell
npm test
```

## Support

If you have any questions or feedback, please use the [discussion board](https://github.com/tectalichq/public-openai-client-js/discussions).

## License

This software is copyright (c) 2022 [Tectalic](https://tectalic.com).

For copyright and license information, please view the **LICENSE** file.
