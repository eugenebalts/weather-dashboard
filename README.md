# Weather Dashboard

⛅ **`Weather Dashboard`** is a web application that provides current weather information and a 5-day weather forecast based on user-provided coordinates.

:rocket: **UI Deployment:** [``https://eugenebalts.github.io/weather-dashboard/build/``](https://eugenebalts.github.io/weather-dashboard/build/) 

## Checklist

### 💻 HTML/CSS:

- [x] Design a simple and user-friendly interface using semantic HTML5.

- [x] Style the application with custom CSS, ensuring a responsive design.
      
### 🔵 React:

- [x] Use functional components.

- [x] Manage state with React hooks (useState, useEffect) for local component state.

### 🟣 Redux:

- [x] Use Redux for global state management.

- [x] Manage the list of favorite cities in the global state.

### 🛰️ API Integration:

- [x] Use fetch to make API calls to OpenWeatherMap

- [x] Handle loading states and errors gracefully (e.g., display a loading spinner or error message).


### ➕ Bonus points 

- [x] Implement local storage so that the list of favorite cities persists when the page is refreshed.

- [x] Utilize Redux Toolkit to set up the store, slices, and actions.

- [x] Add unit tests for Redux slices and actions.

- [x] Display additional weather details, such as a 5-day forecast

---

## Technology Stack

- **React** <sup>_[docs](https://legacy.reactjs.org/docs/getting-started.html)_</sup> - A JavaScript library for building user interfaces.
- **Redux** <sup>_[docs](https://redux.js.org/introduction/getting-started)_</sup> -  A predictable state container for JavaScript apps.
- **Redux Toolkit** <sup>_[docs](https://redux-toolkit.js.org/introduction/getting-started)_</sup> - A set of tools for Redux.
- **TypeScript** <sup>_[docs](https://www.typescriptlang.org/docs/)_</sup> - TypeScript extends JavaScript by adding types to the language.
- **Sass** <sup>_[docs](https://sass-lang.com/documentation/)_</sup> - Sass is a stylesheet language that’s compiled to CSS.
- **ESLint** <sup>_[docs](https://eslint.org/docs/latest/)_</sup> - A pluggable linting utility for JavaScript and JSX.
- **Prettier** <sup>_[docs](https://prettier.io/docs/en/)_</sup> - An opinionated code formatter.
- **React-toastify** <sup>_[docs](https://fkhadra.github.io/react-toastify/introduction)_</sup> - A notification library..

---

## Getting Started

To get a local copy of the project perform the following actions:

1. Clone the repo

```
git clone https://github.com/eugenebalts/weather-dashboard.git
```

2. Install npm packages

```
npm install
```

3. Run the project locally

```
npm run start
```

## Available scripts

#### Development server

- run the project locally

```
npm run start
```

#### Code building

- build development version

```
npm run build
```

#### Prettier (code formatting)

- сhecks formatting for all project files

```
npm run prettier
```

- auto fixes formatting for all project files

```
npm run prettier:fix
```

#### ESLint (code linting)

- checks linting for all project files

```
npm run lint
```

- auto fixes linting error for all project files

```
npm run lint:fix
```

### Testing

- run tests

```
npm run test
```

