# 📊 next google analytics

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_[Google Analytics 4][ga4] for [Next.js][nextjs]._

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install @bradgarropy/next-google-analytics
```

## 🥑 Usage

This component integrates [Google Analytics 4][ga4] into your [Next.js][nextjs] website. It downloads and initializes the `gtag` script, and no further setup is required. In order to work, this component must be placed in the `pages/_app.js` file.

```jsx
// pages/_app.js
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

const App = ({Component, pageProps}) => {
    return (
        <>
            <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
            <Component {...pageProps} />
        </>
    )
}
```

To ensure that Google Analytics is working, you can check a few things.

1. A network request was made to `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`.
2. `window.dataLayer` exists and includes your Measurement ID.
3. When you navigate your site, items are added to the `window.dataLayer` array.

## 📖 API Reference

### `<GoogleAnalytics>`

| Name            | Required | Default | Example          | Description                                        |
| :-------------- | :------: | :-----: | :--------------- | :------------------------------------------------- |
| `measurementId` |  `true`  |         | `"G-XXXXXXXXXX"` | Google Analytics [Measurement ID][measurement-id]. |

The example below shows how to use the component.

```jsx
<GoogleAnalytics measurementId="G-XXXXXXXXXX" />
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/next-google-analytics/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/next-google-analytics/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/next-google-analytics/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/bradgarropy/next-google-analytics
[contributing]: https://github.com/bradgarropy/next-google-analytics/blob/master/contributing.md
[contributors]: #-contributors
[npm]: https://www.npmjs.com/package/@bradgarropy/next-google-analytics
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/next-google-analytics?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/next-google-analytics.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/next-google-analytics?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/next-google-analytics?style=flat-square
[issues]: https://github.com/bradgarropy/next-google-analytics/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/next-google-analytics
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/next-google-analytics?style=flat-square
[github-actions]: https://github.com/bradgarropy/next-google-analytics/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/next-google-analytics/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fnext-google-analytics
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/next-google-analytics?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[ga4]: https://analytics.google.com
[nextjs]: https://nextjs.org
[measurement-id]: https://www.youtube.com/watch?v=eWpTwBO9bNg&t=27s
