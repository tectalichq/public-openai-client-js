# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.3.0 - 2023-03-17
### Added
- Add support for [Chat](https://platform.openai.com/docs/api-reference/chat) with a new `ChatCompletions` handler class containing a new `create()` method.
- Add support for [Audio transcription](https://platform.openai.com/docs/api-reference/audio) with a new `AudioTranscriptions` handler class containing a new `create()` method.
- Add support for [AudioC translation](https://platform.openai.com/docs/api-reference/audio) with a new `AudioTranslations` handler class containing a new `create()` method.
- Add ability to use `.env` file o control test behaviour.

### Changed
- Updated latest OpenAI specification to v1.2.0.
- Make test use of `OPENAI_CLIENT_TEST_AUTH_TOKEN`, `OPENAI_CLIENT_TEST_BASE_URI`, `OPENAI_CLIENT_TEST_TIMEOUT` and `OPENAI_CLIENT_TEST_VERBOSE_OUTPUT` environment variables.

## 0.2.1 - 2023-02-23

### Fixed
- Fix error when retrieving a response from the `.edits.create()` handler method.

### Changed
- Remove `id` and `model` required properties from the `.edits.create()` handler method response, as they are no longer returned by OpenAI's API.

## 0.2.0 - 2022-11-14

### Added
- Add support for [Edits](https://platform.openai.com/docs/api-reference/edits) with a new `Edits` handler class containing a new `create()` method.
- Add support for [Embeddings](https://platform.openai.com/docs/guides/embeddings) with a new `Embeddings` handler class containing a new `create()` method.
- Add support for [Files](https://platform.openai.com/docs/api-reference/files) with a new `Files` handler class containing four new methods:
  - `list()`
  - `create()`
  - `retrieve()`
  - `delete()`
- Add support for [Files Content](https://platform.openai.com/docs/api-reference/files/retrieve-content) with a new `FilesContent` handler class containing a new `download()` method.
- Add support for [Fine-Tuning](https://platform.openai.com/docs/guides/fine-tuning) with a new `FineTunes` handler class containing three new methods:
  - `list()`
  - `create()`
  - `retrieve()`
- Add support for [Fine-Tune Cancellation](https://platform.openai.com/docs/api-reference/fine-tunes/cancel) with a new `FineTunesCancel` handler class containing a new `cancelFineTune()` method.
- Add support for [Fine-Tune Events](https://platform.openai.com/docs/api-reference/fine-tunes/events) with a new `FineTunesEvents` handler class containing a new `listFineTune()` method.
- Add support for [Image Edits](https://platform.openai.com/docs/guides/images/edits) using a new `ImagesEdits` handler class containing a new `createImage()` method.
- Add support for [Image Generations](https://platform.openai.com/docs/guides/images/generations) using a new `ImagesGenerations` handler class containing a new `create()` method.
- Add support for [Image Variations](https://platform.openai.com/docs/guides/images/variations) using a new `ImagesVariations` handler class containing a new `createImage()` method.
- Add support for [Models](https://platform.openai.com/docs/models) with a new `Models` handler class containing three new methods:
  - `list()`
  - `retrieve()`
  - `delete()`
- Add support for [Moderation](https://platform.openai.com/docs/guides/moderation) using a new `Moderations` handler class containing a new `create()` method.
- Added comments for [Completions](https://platform.openai.com/docs/api-reference/completions) handler and model classes.

### Changed
- Improve README.md file.
- Updated latest OpenAI specification to v1.1.0
- Updated Completions handler and model classes to match the specification.
- Fine-tune error handling.
- Tests are separated into unit and integration tests.
- Enabled `esModuleInterop` for tsc build.

## 0.1.2 - 2022-11-02

### Added
- Return data type autocompletion for endpoints

## 0.1.1 - 2022-10-28

### Changed
- Switch License.

## 0.1.0 - 2022-10-28

### Added
- Initial release.
