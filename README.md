# CSUN React Components
Reusable CSUN themed react view components.

## Introduction
CSUN React Components is a package you can include in your react project to quickly and easily add CSUN themed components to your application.
The styles are all part of a required project [Metaphor](https://github.com/csun-metalab/metaphor). 

## Getting Started

Clone this project anywhere on your system:

  ```bash
  $ git clone https://github.com/CSUN-IT/csun-react-components.git
  ```

While this project is in initial development, switch to the develop branch:
  ```bash
  $ git checkout develop
  ```

Install this project as a node_module:
  ```bash
  $ npm install <Path to Project>
  ```

In your project add the following and update the paths to Metaphor:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="public/favicon.ico">
    <script src="//use.typekit.net/gfb2mjm.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>

    <link rel="stylesheet" href="/public/metaphor-styles.css">
    <title>React App</title>

  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="/bundle.js"></script>
    <script src="/public/metaphor.min.js"></script>
  </body>
</html>
```

## Working with the project
If you want to experiment or contribute to this project, refer to the following for running a local development environment:

Navigate to root of project and run the following which will install all dependencies:
  ```bash
  $ yarn
  ```

To start the development server run the following:
  ```bash
  $ yarn start
  ```
Refer to output to determine your development URL (e.g localhost:8080)

This is also the best way to read documentation and see examples.

## Current status
This project is in very early development, you are best suited to use the develop branch. This project will likely restrict you more than help you.
First goal of this project is to create naive components that are styled with Metaphor. Ideally if you find a limitation, please consider contributing or 
open an issue.
