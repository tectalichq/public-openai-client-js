# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.2.0 - 2022-11-14

### Added
- Add support for [Edits](https://beta.openai.com/docs/api-reference/edits) with a new `Edits` handler class containing a new `create()` method.
- Add support for [Embeddings](https://beta.openai.com/docs/guides/embeddings) with a new `Embeddings` handler class containing a new `create()` method.
- Add support for [Files](https://beta.openai.com/docs/api-reference/files) with a new `Files` handler class containing four new methods:
  - `list()`
  - `create()`
  - `retrieve()`
  - `delete()`
- Add support for [Files Content](https://beta.openai.com/docs/api-reference/files/retrieve-content) with a new `FilesContent` handler class containing a new `download()` method.
- Add support for [Fine-Tuning](https://beta.openai.com/docs/guides/fine-tuning) with a new `FineTunes` handler class containing three new methods:
  - `list()`
  - `create()`
  - `retrieve()`
- Add support for [Fine-Tune Cancellation](https://beta.openai.com/docs/api-reference/fine-tunes/cancel) with a new `FineTunesCancel` handler class containing a new `cancelFineTune()` method.
- Add support for [Fine-Tune Events](https://beta.openai.com/docs/api-reference/fine-tunes/events) with a new `FineTunesEvents` handler class containing a new `listFineTune()` method.
- Add support for [Image Edits](https://beta.openai.com/docs/guides/images/edits) using a new `ImagesEdits` handler class containing a new `createImage()` method.
- Add support for [Image Generations](https://beta.openai.com/docs/guides/images/generations) using a new `ImagesGenerations` handler class containing a new `create()` method.
- Add support for [Image Variations](https://beta.openai.com/docs/guides/images/variations) using a new `ImagesVariations` handler class containing a new `createImage()` method.
- Add support for [Models](https://beta.openai.com/docs/models) with a new `Models` handler class containing three new methods:
  - `list()`
  - `retrieve()`
  - `delete()`
- Add support for [Moderation](https://beta.openai.com/docs/guides/moderation) using a new `Moderations` handler class containing a new `create()` method.
- Added comments for [Completions](https://beta.openai.com/docs/api-reference/completions) handler and model classes.

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
