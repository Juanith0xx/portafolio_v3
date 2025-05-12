# Etapa 1: Construcción (build)
FROM node:20 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la app
FROM nginx:alpine

# Copia los archivos de build de la etapa anterior al contenedor de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx estará escuchando
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]