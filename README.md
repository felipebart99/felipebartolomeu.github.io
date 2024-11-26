# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- gerenciar imagens em um projeto Vite:

a) Dentro da pasta public
A pasta public (na raiz do projeto) é especial no Vite.
Tudo o que você colocar nela será copiado diretamente para a build final sem alterações.
Exemplo: Se você colocar uma imagem em public/img/logo.png, ela estará acessível com o caminho absoluto:

<img src="/img/logo.png" alt="Logo" />
