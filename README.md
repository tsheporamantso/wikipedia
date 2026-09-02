<a name="readme-top"></a>

<div align="center">

  <h1><b>Wikipedia 🌐</b></h1>
  <img src="./assets/wikipedia.png" alt="logo" />
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Wikipedia Search <a name="about-project"></a>

A single-page search application built with vanilla TypeScript and the Wikipedia REST API. Submit a topic in the input field (or speak it via the mic) and the app returns matching articles as reference-style result cards.

## 🛠 Built With <a name="built-with"></a>

- **JavaScript**
- **TypeScript**
- **HTML**
- **CSS**

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/docs/">TypeScript</a></li>
  </ul>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript (ES modules)</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Wikipedia REST API integration**
- **Search input field**
- **Voice search** using the browser Web Speech API
- **Light/dark theme toggle** with persisted preference
- **Responsive CSS layout**
- **Synopsis search results in card form with title**
- **Detailed Wikipedia page on click of card**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- https://wikipedia-ten-indol.vercel.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Install [TypeScript](https://www.typescriptlang.org/download) compiler (`tsc`) globally
- Install NodeJS using [link](https://nodejs.org/en/download)
- (Optional) Visual Studio Code using [link](https://code.visualstudio.com/)

### Setup

Clone this repository to your desired folder:

```sh
  mkdir Wikipedia
  cd Wikipedia
  git clone git@github.com:tsheporamantso/wikipedia.git
```

### Install

Compile the TypeScript source to `dist/` (there is no `package.json` or npm install — the compiler is used directly):

```sh
  tsc --watch
```

> Note: do **not** run `tsc --init` — it would overwrite the project's existing `tsconfig.json`.

### Usage

Serve the folder statically (the compiled `dist/` output is what the browser loads):

```sh
  live-server
```

Open the served URL and search for any topic.

### Run tests

There are currently no automated tests or configured test runner for this project.

### Deployment

- https://wikipedia-ten-indol.vercel.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Gladwin Tshepo Ramantso**

- GitHub: [@tsheporamantso](https://github.com/tsheporamantso)
- Twitter: [@ramgt001](https://twitter.com/ramgt001)
- LinkedIn: [Tshepo Gladwin Ramantso](https://www.linkedin.com/in/tshepo-ramantso-b6a35433/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Jest Tests**
- [ ] **Results pagination and caching**
- [ ] **AI-assisted query expansion** (see [_plans/ai-integration.md](./_plans/ai-integration.md))

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/tsheporamantso/wikipedia/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please give a star on [github](https://github.com/tsheporamantso/wikipedia) & follow us on [twitter](https://twitter.com/ramgt001) and also connect on [Linkedin](https://www.linkedin.com/in/gladwinramantso/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank:

- [ ] **John Smilga from Coding Addicts**
- [ ] **Wikipedia for free API endpoints**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/tsheporamantso/wikipedia/blob/main/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
