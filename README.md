# useLocalStorageReducer

<!-- <div align="center"> -->

<!-- ![npm](https://img.shields.io/npm/dt/nodejs-health-checker?style=for-the-badge)<br> -->

[![npm version](https://badge.fury.io/js/%40penseapp%2FuseLocalStorageReducer.svg)](https://badge.fury.io/js/%40penseapp%2FuseLocalStorageReducer)
[![Tag Status](https://img.shields.io/github/tag/penseapp/useLocalStorageReducer)](https://img.shields.io/github/v/tag/penseapp/useLocalStorageReducer)
[![License Status](https://img.shields.io/github/license/penseapp/useLocalStorageReducer)](https://img.shields.io/github/license/penseapp/useLocalStorageReducer)
[![Issues Status](https://img.shields.io/github/issues/penseapp/useLocalStorageReducer)](https://img.shields.io/github/issues/penseapp/useLocalStorageReducer)

<!-- ![test](https://github.com/penseapp/useLocalStorageReducer/workflows/test/badge.svg?branch=master) -->
<!-- ![GitHub Workflow Status (event)](https://img.shields.io/github/workflow/status/@penseapp/useLocalStorageReducer/test) -->
<!-- [![Coverage Status](https://coveralls.io/repos/github/penseapp/useLocalStorageReducer/badge.svg?branch=master)](https://coveralls.io/github/penseapp/useLocalStorageReducer?branch=master) -->

<!-- </div> -->

This is a react hook that allows you to use the power of browser localstorage
and the useReducer react hook combined!

The API is the same, and you'll see no difference between them!

## Example live action

![Peek 2021-03-06 15-36](https://user-images.githubusercontent.com/5152197/110217257-d131ed80-7e91-11eb-8f57-cb23404c52d6.gif)

You can try this live version on: https://penseapp-uselocalstoragereduce.web.app/

## TL;DR

```tsx
import { useLocalStorageReducer } from "@penseapp/useLocalStorageReducer";

export interface ExampleContextInterface {
  field1: string;
}

export type ExampleAction = UPDATE_STATE; // Your reducers used in switch

const [stateExample, dispatchExample] = useLocalStorageReducer<
  ExampleContextInterface,
  ExampleAction
>(
  "localStorage-key",
  Reducer,
  exampleInitialState,
  60 * 60 // 1 hour
);
```

## How to install

```sh
yarn add @penseapp/uselocalstoragereducer
```

or

```sh
npm i @penseapp/uselocalstoragereducer
```

## How to use

You need to implement the reducer/provider on your side. If you want a suggestion to
organize the useLocalStorageReducer, please check the files inside the folder
`playground/src/ExampleContext`. And look at the file `ExampleContext.tsx`

```tsx
import { useLocalStorageReducer } from "@penseapp/useLocalStorageReducer";
```

Simple change the `useReducer` to `useLocalStorageReducer` on any hooks and it's done.
Now you can reload your browser and your state will maintein

```diff
- import React, { useReducer } from "react";
+ import React from "react";
+ import { useLocalStorageReducer } from "@penseapp/useLocalStorageReducer";

const App: React.FC = () => {
-  const [state, setstate] = useReducer(reducer, initialState);
+  const [state, setstate] = useLocalStorageReducer<I, A>('keyName', reducer, initialState, false);
// I: Your object
// A: Your action

  return (
    <>
      Your React component...
    </>
  );
};

export default App;
```

## API / Props

| Name         | Type            | Required | Default            | Description                                              |
| ------------ | --------------- | -------- | ------------------ | -------------------------------------------------------- |
| key          | string          | true     |                    | Key name from `localStorage` (Should be unique)          |
| reducer      | React Reducer   | true     |                    | https://reactjs.org/docs/hooks-reference.html#usereducer |
| initialValue | any (Generic)   | true     |                    | Same as the `useReducer` hook                            |
| expire       | number or false | false    | 60 \* 30 (seconds) | Time in seconds to expiry (false to infinite)            |

<br />

## localStorage expire

This lib use as dependecy the [expired-storage](https://www.npmjs.com/package/expired-storage), so you can controll your state by how much time it should persist on localStorage

You have two options:

- Set the time in seconds
- Set false to infinite

<br />

**Examples**

```tsx
import Reducer from "your-reducer";

// Never expires (infinite)
const [state, setstate] = useLocalStorageReducer<boolean>(
  "keyName",
  Reducer,
  { field1: "example" },
  false
);

// Expires in 1 minute
const [state, setstate] = useLocalStorageReducer<boolean>(
  "keyName",
  Reducer,
  { field1: "example" },
  60
);

// Expires in 1 hour
const [state, setstate] = useLocalStorageReducer<boolean>(
  "keyName",
  Reducer,
  { field1: "example" },
  60 * 60 * 1
); // 3600 seconds

// Expires in 12 hours
const [state, setstate] = useLocalStorageReducer<boolean>(
  "keyName",
  Reducer,
  { field1: "example" },
  60 * 60 * 12
); // 43200 seconds
```

## Running local

Git clone this repository

```shell
git clone git@github.com:penseapp/useLocalStorageReducer.git
```

Go to repository folder

```shell
cd useLocalStorageReducer
```

Install and start playground repository

```shell
yarn && yarn install:playground && yarn start:playground
```
