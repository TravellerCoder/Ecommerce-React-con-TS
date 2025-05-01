Ecommerce realizado con React y TypeScript como cierre del modulo de reactjs + typescript de la cursada de FrontEnd Developer de Digital House Argentina.

Proyecto creado con vite. 

Hacer git clone https://github.com/TravellerCoder/Ecommerce-React-con-TS/edit/master/README.md en la consola.

Correr npm install para instalar todas las dependencias y correr el comando npm run dev para verlo de forma local en el navegador.
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
