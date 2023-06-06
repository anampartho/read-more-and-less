# Introduction - "Read More / Read Less React Component"

[![npm version](https://badge.fury.io/js/read-more-and-less.svg)](https://badge.fury.io/js/read-more-and-less) ![NPM](https://img.shields.io/npm/l/read-more-and-less)

> _This is an updated iteration of [react-read-more-less
> ](https://www.npmjs.com/package/react-read-more-less)_

"**Read More And Less**" is react component, which lets you to truncate text based on specified character limit and show a link to "show more" or "show less" of the text.

## Installation

```bash
npm i read-more-and-less
```

## Import component

```js
// Default import
import ReadMoreAndLess from "read-more-and-less";

// or Named import
import { ReadMoreAndLess } from "read-more-and-less";
```

## Basic Usage

```js
function Example() {
  return (
    <ReadMoreAndLess
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita placeat cumque ullam fuga possimus sunt soluta voluptatibus blanditiis consequatur! Magni, maiores necessitatibus repudiandae totam facere officia iste ducimus vitae."
      charLimit={30}
    />
  );
}
```

<!-- charLimit?: number;
  readMoreText?: string;
  readLessText?: string;
  stopPropogation?: boolean;
  preventDefault?: boolean;
  text: string; -->

<!-- interface ReadMoreAndLess {
  charLimit?: number;
  readMoreText?: string;
  readLessText?: string;
  stopPropogation?: boolean;
  preventDefault?: boolean;
  text: string;
}

  charLimit: originalCharLimit = 150,
  readMoreText = "Read More",
  readLessText = "Read Less",
  stopPropogation = true,
  preventDefault = true,
  text,-->

## Props

|                   | Description                                                                                       | Type      | Required | Default Value |
| ----------------- | ------------------------------------------------------------------------------------------------- | --------- | -------- | ------------- |
| `charLimit`       | The character limit where you want your text to be truncated                                      | `number`  | No       | `150`         |
| `readMoreText`    | The text you want to see in the "Read More" clickable link                                        | `string`  | No       | `Read More`   |
| `readLessText`    | The text you want to see in the "Read Less" clickable link                                        | `string`  | No       | `Read Less`   |
| `stopPropogation` | If `true` then `event.stopPropagation()` is triggered on all `Read More` / `Read Less` link click | `boolean` | No       | `true`        |
| `preventDefault`  | If `true` then `event.preventDefault()` is triggered on all `Read More` / `Read Less` link click  | `boolean` | No       | `true`        |
| `text`            | The text you want to be truncated                                                                 | `string`  | Yes      | N/A           |

---

##### Notes on the original component

The original component itself still works, but it is using outdated dependecies and react class component. In this version, I have updated the dependencies and also implemented react function components.

The build process of the original component was also including react and webpack into its bundle. This was causing some extra load on one of the websites I was working on. In this iteration, I've tried to reduce the bundle size by only bundling the component file itself.
