# Simulador de Ritmos de Carrera

Este proyecto es un simulador de ritmos de carrera que permite calcular el pace estimado en minutos por kilómetro en función de la distancia seleccionada y el tiempo objetivo ingresado.

## Descripción

- Nombre: Simulador de Ritmos de Carrera
- Tipo: Aplicación web estática
- Tecnologías: HTML, CSS, JavaScript y Sass (SCSS)
- Objetivo: Calcular el ritmo por kilómetro para una distancia de 5 km, 10 km, 21 km o 42 km según el tiempo introducido.

## Características

- Selección de distancia: 5 km, 10 km, 21 km y 42 km
- Entrada de tiempo objetivo en horas, minutos y segundos
- Validación de campos obligatorios
- Indicadores de error para entradas incompletas o valores incorrectos
- Resultado del pace mostrado de forma clara
- Botón para reiniciar el formulario

## Estructura del proyecto

- `index.html` — Página principal con el formulario y la interfaz
- `main.js` — Lógica de validación y cálculo del pace
- `css/styles.css` — Estilos compilados
- `styles/main.scss` — Archivo Sass principal
- `styles/_variables.scss` — Variables de diseño y colores
- `styles/_mixins.scss` — Mixins Sass reutilizables

## Uso

1. Abre `index.html` en un navegador moderno.
2. Selecciona una distancia.
3. Ingresa el tiempo objetivo en horas, minutos y segundos.
4. Haz clic en "Calcular".
5. Visualiza el ritmo recomendado en `min/km`.

## Notas

- Si deseas editar el diseño, modifica los archivos Sass en la carpeta `styles/`.
- El archivo `css/styles.css` es la versión compilada de `styles/main.scss`.

## Mejoras sugeridas

- Añadir soporte para más distancias
- Incluir cálculo de tiempo estimado para distancias personalizadas
- Preparar el proyecto con un flujo de compilación Sass (por ejemplo, con npm y `sass`)
