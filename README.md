
# Working Labs (Version Alpha)

Este proyecto es una aplicación web desarrollada con Next.js que utiliza Chakra UI para el diseño, Vercel AI SDK para la integración de modelos de IA y lucide-react para los iconos. El propósito de la aplicación es permitir y facilitar a los usuarios la creacion de ofertas laborales para el sector tecnologico, para ello primero deberan rellenar un formulario con los datos de que tipo de candidato estan buscando luego balidar los datos y pasarcelo al modelo de IA para que genere laoferta laboral, el contenido de la oferta generanda de podra copiar fácilmente en el portapapeles.



## Características

- **Next.js**: Framework de React para aplicaciones del lado del servidor y del lado del cliente.
- **Chakra UI**: Biblioteca de componentes de interfaz de usuario para React.
- **Vercel AI SDK**: SDK para integrar modelos de IA.
- **lucide-react**: Biblioteca de iconos.
- **Zustand**: Biblioteca para gestionar el estado Global
- **React-hook-form**: Para la gestion y validación de Formularios
- **Firebase**: Autentificacion Y Base de datos

## Requisitos

- Node.js >= 14
- npm o yarn

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Ander-Labs/ai-working-labs.git
   cd ai-working-labs
   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

## Uso

1. Ejecuta la aplicación en modo de desarrollo:

   ```bash
   npm run dev

   ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

# Estructura del Proyecto

```plaintext
ai-working-labs/
├── node_modules/
├── public/
│   ├── robots.txt
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   ├── about/
│   │   ├── auth/
│   │   ├── contact/
│   │   ├── job-generator-ai
│   │   ├── ChakraUIProviders.tsx
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── global/
│   │   ├── Skeleton/
│   │   ├── ui/
│   │   │   ├── form/
│   │   │   ├── ai/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── auth/
│   │   │   ├── bashboard/
│   ├── config/
│   ├── data/
│   ├── Global/
│   │   ├── useStore.ts
│   ├── hooks/
│   ├── schema/
│   ├── services/
│   │   ├── country/
│   ├── types/
│   ├── utils/
│   │   ├── promptGenerator.ts
├── env
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.json
├── ....

```


## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `start`: Inicia la aplicación compilada.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

