# Tectalic OpenAI REST API Client

## Introduction

The **Tectalic OpenAI REST API Client** is a package that provides a convenient and straightforward way to interact with the **OpenAI API** from your JavaScript application.

Supports **ChatGPT**, **GPT-4**, **GPT-3.5**, **GPT-3**, **Codex**, **DALL·E**, **Whisper**, **Embeddings** and **Moderation** models, with fully typed Data Transfer Objects (DTOs) for all requests and responses and IDE autocomplete support.

More information is available from [https://tectalic.com/apis/openai](https://tectalic.com/apis/openai).

**This is an unofficial package and has no affiliations with OpenAI.**

## Examples

Integrating OpenAI into your application is now as simple as a few lines of code.

### Chat Completion using ChatGPT (GPT-3.5 & GPT-4)


```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .chatCompletions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Will using a well designed and supported third party package save time?' }]
  })
  .then((response) => {
    console.log(response.data.choices[0].message.content.trim());
  });

// Yes, using a well-designed and supported third party package can save time during software development.
// It allows you to focus on the core functionality of your application without having to reinvent the wheel or spend resources developing the same functionality from scratch.
// A good third-party package can provide reliability, efficiency, and continued support with updates and bug fixes, which in turn facilitates faster development and a more stable final product.
// Additionally, using widely adopted packages can also increase the chances of compatibility with other software components and make it easier for other developers to understand and work with your code.
```

[Learn more about chat completion](https://platform.openai.com/docs/guides/chat).

This handler supports both the *GPT-3.5* and *GPT-4* models:

#### GPT-3.5

Supported [GPT-3.5 models](https://platform.openai.com/docs/models/gpt-3-5) include `gpt-3.5-turbo`, `text-davinci-003`, `text-davinci-002` and more.

#### GPT-4

Supported [GPT-4 models](https://platform.openai.com/docs/models/gpt-4) include `gpt-4` and more.

Note: GPT-4 is currently in a limited beta and is only accessible to those who have been granted access. [Please see here](https://platform.openai.com/docs/models/gpt-4) for details and instructions on how to join the waitlist.

If you receive a 404 error when attempting to use GPT-4, then your OpenAI account has not been granted access.

### Text Completion (GPT-3)

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .completions.create({
    model: 'text-davinci-003',
    prompt: 'Will using a third party package save time?'
  })
  .then((response) => {
    console.log(response.data.choices[0].text.trim());
  });

// Using a third party package can save time because you don't have to write the code yourself.
```

This handler supports all [GPT-3 models](https://platform.openai.com/docs/models/gpt-3), including `text-davinci-003`, `text-davinci-002` and more.

[Learn more about text completion](https://platform.openai.com/docs/guides/completion).

### Code Completion (Codex)

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

Supported [Codex models](https://platform.openai.com/docs/models/codex) include `code-davinci-002` and `code-cushman-001`.

[Learn more about code completion](https://platform.openai.com/docs/guides/code).

### Image Generation (DALL·E)

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .imagesGenerations.create({
    prompt: 'A cute baby sea otter wearing a hat',
    size: '256x256',
    n: 5
  })
  .then((response) => {
    response.data.data.forEach((image) => console.log(image.url));
  });
```

[Learn more about image generation](https://platform.openai.com/docs/guides/images).


### Speech to Text Audio Transcription (Whisper)

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .audioTranscriptions.create({
    file: '/full/path/to/audio/file.mp3',
    model: 'whisper-1'
  })
  .then((response) => {
    console.log(response.text.trim());
  });

// Your audio transcript in your source language...
```

Supported [Whisper models](https://platform.openai.com/docs/models/whisper) include `whisper-1`.

[Learn more about speech-to-text](https://platform.openai.com/docs/guides/speech-to-text), including the [50+ supported languages](https://platform.openai.com/docs/guides/speech-to-text/supported-languages).


### Speech to Text Audio Translation (Whisper)

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .audioTranslations.create({
    file: '/full/path/to/audio/file.mp3',
    model: 'whisper-1'
  })
  .then((response) => {
    console.log(response.text.trim());
  });

// Your audio transcript in English...
```

Supported [Whisper models](https://platform.openai.com/docs/models/whisper) include `whisper-1`.

[Learn more about speech-to-text](https://platform.openai.com/docs/guides/speech-to-text), including the [50+ supported languages](https://platform.openai.com/docs/guides/speech-to-text/supported-languages).

## Installation

### Package Installation

Install the package into your project:

```shell
npm install @tectalic/openai --save
```

## Usage

You can customize the following code sample to suit your application.

```js
const tectalicOpenai = require('@tectalic/openai').default;

// Build a Tectalic OpenAI REST API Client.
const openaiClient = tectalicOpenai(process.env.OPENAI_API_KEY);
```

### Authentication

Authentication to the **OpenAI API** is by HTTP Bearer authentication.

Please see the OpenAI API documentation for more details on obtaining your authentication credentials.

In the **Usage** code above, customize the `tectalicOpenai` argument to your needs. For example, you must likely add an `OPENAI_API_KEY` environment variable to your system.

### Client Object

The primary way to interact with the library is the `openaiClient` object.

This `openaiClient` object contains the properties that let you quickly access the 1 API Handler.

Please see below for a complete list of supported handlers and methods.

### Supported API Handlers and Methods

This package supports 20 API Methods grouped into 13 API Handlers.

See the table below for a complete list of API Handlers and Methods.

| API Handler Class and Method Name  | Description                                                                                                             | API Verb and URL                           |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `AudioTranscriptions::create()`    | Transcribes audio into the input language.                                                                              | `POST` `/audio/transcriptions`             |
| `AudioTranslations::create()`      | Translates audio into into English.                                                                                     | `POST` `/audio/translations`               |
| `ChatCompletions::create()`        | Creates a completion for the chat message                                                                               | `POST` `/chat/completions`                 |
| `Completions.create()`             | Creates a completion for the provided prompt and parameters                                                             | `POST` `/completions`                      |
| `Edits.create()`                   | Creates a new edit for the provided input, instruction, and parameters                                                  | `POST` `/edits`                            |
| `Embeddings.create()`              | Creates an embedding vector representing the input text.                                                                | `POST` `/embeddings`                       |
| `Files.list()`                     | Returns a list of files that belong to the user's organization.                                                         | `GET` `/files`                             |
| `Files.create()`                   | Upload a file that contains document(s) to be used across various endpoints/features.                                   | `POST` `/files`                            |
| `Files.retrieve()`                 | Returns information about a specific file.                                                                              | `GET` `/files/{file_id}`                   |
| `Files.delete()`                   | Delete a file.                                                                                                          | `DELETE` `/files/{file_id}`                |
| `FilesContent.download()`          | Returns the contents of the specified file                                                                              | `GET` `/files/{file_id}/content`           |
| `FineTunes.list()`                 | List your organization's fine-tuning jobs                                                                               | `GET` `/fine-tunes`                        |
| `FineTunes.create()`               | Creates a job that fine-tunes a specified model from a given dataset.                                                   | `POST` `/fine-tunes`                       |
| `FineTunes.retrieve()`             | Gets info about the fine-tune job.<br />Learn more about Fine-tuning                                                    | `GET` `/fine-tunes/{fine_tune_id}`         |
| `FineTunesCancel.cancelFineTune()` | Immediately cancel a fine-tune job.                                                                                     | `POST` `/fine-tunes/{fine_tune_id}/cancel` |
| `FineTunesEvents.listFineTune()`   | Get fine-grained status updates for a fine-tune job.                                                                    | `GET` `/fine-tunes/{fine_tune_id}/events`  |
| `ImagesEdits.createImage()`        | Creates an edited or extended image given an original image and a prompt.                                               | `POST` `/images/edits`                     |
| `ImagesGenerations.create()`       | Creates an image given a prompt.                                                                                        | `POST` `/images/generations`               |
| `ImagesVariations.createImage()`   | Creates a variation of a given image.                                                                                   | `POST` `/images/variations`                |
| `Models.list()`                    | Lists the currently available models, and provides basic information about each one such as the owner and availability. | `GET` `/models`                            |
| `Models.retrieve()`                | Retrieves a model instance, providing basic information about the model such as the owner and permissioning.            | `GET` `/models/{model}`                    |
| `Models.delete()`                  | Delete a fine-tuned model. You must have the Owner role in your organization.                                           | `DELETE` `/models/{model}`                 |
| `Moderations.create()`             | Classifies if text violates OpenAI's Content Policy                                                                     | `POST` `/moderations`                      |

### Making a Request

You can access all API Handlers from the client class using the Client class:

```js
openaiClient.completions.create({
  model: 'text-davinci-002',
  prompt: 'Will using a third party package save time?'
});
```

### Retrieving the Response

Once you have made a request, it will result in a `Promise`.

Example:
```js
openaiClient.completions.create({ ... }).then((response) => {
    console.log(response.data.choices[0].text.trim());
})
```
### Errors

When performing requests with **Tectalic OpenAI REST API Client**, specific scenarios will cause a `ClientError` to be thrown. Please see below for details.

#### Unsuccessful HTTP Response Codes

The **Tectalic OpenAI REST API Client** depends on [Axios HTTP client](https://github.com/axios/axios). See error handling in their [documentation](https://github.com/axios/axios#handling-errors). The library wraps Axios errors into `ClientError`.

An unsuccessful response code is classified as not in the range `200`-`299` (inclusive). Examples of unsuccessful response codes include:

- Informational responses (`100`-`199`)
- Redirection responses (`300`-`399`)
- Client error responses (`400`-`499`)
- Server error responses (`500`-`599`)

Below is an example of how you may wish to use a `then`/`catch` callback when performing a request so that you can detect and handle unexpected errors.

```js
const tectalicOpenai = require('@tectalic/openai').default;

tectalicOpenai(process.env.OPENAI_API_KEY)
  .audioTranscriptions.create({
    file: '/full/path/to/audio/file.mp3',
    model: 'whisper-1'
  })
  .then((response) => {
    const transcript = response.text.trim();
    // Do something with the transcript...
  })
  .catch((error) => {
    // Error response received. Retrieve the HTTP response code and response body.
    const responseBody = error.response.data;
    const responseCode = error.response.status;
    // Handle the error...
  });
```

## Tests

The **Tectalic OpenAI REST API Client** package includes several types of automated Jest tests to verify the correct operation:

- Unit Tests
- Integration Tests

You must have installed the **Tectalic OpenAI REST API Client** package with its dev dependencies to run these tests.

These tests are designed to:

- confirm that each API Method assembles a valid request that matches the OpenAI API OpenAPI specification.
- verify the behaviour of other package parts, such as the `Client` class.


The unit tests can be run using the following command, which needs to be run from this package's root directory.

```shell
npm run test:unit
```

Unit tests do *not* perform any actual requests against the OpenAI API.

Unit tests are located in the `test/unit` directory.

### Integration Tests

Integration tests are located in the `test/integration` directory.

These Jest tests are designed to confirm that each API Method parses a valid response, according to the OpenAI API OpenAPI specification. Out of the box, the integration tests are designed to work with the [Prism Mock Server](https://meta.stoplight.io/docs/prism/).

#### Using Prism as the Target

Make sure Prism is installed. Please see the [Prism documentation](https://meta.stoplight.io/docs/prism/) for details on how to install Prism.

Once Prism is installed, you can run Prism and the integration tests side by side in separate terminal windows or using the following command, which needs to be run from this package's root directory.

```shell
echo "> Starting Prism server"
prism mock test/openapi.yaml >/dev/null 2>&1 &
PRISM_PID=$!
sleep 2
echo "  => Started"
npm run test:integration
kill $PRISM_PID
```

Those commands will start the Prism mock server, run the integration tests, and stop the Prism mock server when the tests are completed.

In this case, the integration tests do *not* perform any real requests against the OpenAI API.

#### Using a Different Target

By setting the `OPENAI_CLIENT_TEST_BASE_URI` environment variable, you can set a different API endpoint target for the integration tests. For example, instead of Prism, you can use a different mocking/staging/test server of your choice or the OpenAI API's live endpoints.

Do not forget to set the appropriate credentials in the `OPENAI_CLIENT_TEST_AUTH_TOKEN` environment variables. You can use a `.env` file to provide the environment variables. See examples in the `.env.sample` file.

After your setup is complete, run the following command.

```shell
npm run test:integration
```

We do not recommend running integration tests against the live OpenAI API endpoints. This is because the tests will send example data to all endpoints, which can create new data or delete existing data.

### Writing Your Own Tests

If you are writing your tests, you will likely need to mock the responses from the **OpenAI API**.

One way of doing this is to install the `openapi-enforcer` package into your project. This allows you to mock the responses from the **OpenAI API** rather than performing real requests. See the example in the `test/utils.ts` file.

Please see the [OpenAPI Enforcer documentation](https://openapi-enforcer.com/guide/) for details.

## Support

If you have any questions or feedback, please use the [discussion board](https://github.com/tectalichq/public-openai-client-js/discussions).

## License

This software is copyright (c) 2022-present [Tectalic](https://tectalic.com).

For copyright and license information, please view the **LICENSE** file.
