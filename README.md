# Recipe App

This project was made with Reactjs. Styled with "styled-components" and responsive design for mobile phones. Used api key and `axios` for getting data from 
`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`. For login random
background image from `https://picsum.photos/1600/900`

## Project Skeleton

```
Recipe App 
|       
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── header
│    │       │     ├── Header.jsx
│    │       │     └── Header.styled.jsx
│    │       ├── cards
│    │       │     ├── Cards.jsx
│    │       │     └── Cards.styled.jsx
│    │       ├── globalStyles
│    │       │     ├── Flex.jsx
│    │       │     ├── Global.styles.jsx
│    │       │     └── theme.js
│    │       └── navbar
│    │             ├── Navbar.jsx
│    │             └── Navbar.styled.jsx
│    ├── pages
│    │       ├── home
│    │       │     ├── Home.jsx
│    │       │     └── Home.styled.jsx
│    │       ├── about
│    │       │     ├── About.jsx
│    │       │     └── About.styled.jsx
│    │       ├── login
│    │       │     ├── Login.jsx
│    │       │     └── Login.styled.js
│    │       ├── register
│    │       │     └── Register.jsx
│    │       └── detail
│    │             ├── Detail.jsx
│    │             └── Detail.styled.jsx
│    ├── router
│    │       ├── AppRouter.jsx
│    │       └── PrivateRouter.jsx
│    ├── assets
│    │       └── [images]
│    ├── App.js
│    └── index.js
|----README.md 
├── recipe-app.gif
├── package.json
└── yarn.lock
```

For look [please click here](https://https://recipe-app-react-ali.netlify.app/)

![](recipe-app.gif)


