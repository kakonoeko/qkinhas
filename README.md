# Qkinhas · Cookies & good vibes

Web pública: https://kakonoeko.github.io/qkinhas/

Repositorio: https://github.com/kakonoeko/qkinhas

Web adaptable a móvil y ordenador para Qkinhas, negocio de cookies estilo Nueva York, café de especialidad y matcha en lata en A Coruña.

## Incluye

- Carta visual con fotos reales del negocio, filtros y favoritos locales.
- Teléfono verificado en la biografía de Instagram: +34 666 086 602.
- Accesos a WhatsApp, Instagram, Reels, TikTok, Google Maps, Glovo y Uber Eats.
- Historia, horarios, preguntas frecuentes y mapa cargado bajo demanda.
- Metadatos sociales y datos estructurados para SEO local. La indexación requiere un sitio público.
- Diseño sin dependencias, sin analítica, sin formularios ni píxeles.

## Ver en local

Requiere Node.js. Ejecutar `npm start` y abrir http://127.0.0.1:4173.

`npm run check` comprueba la sintaxis de JavaScript. La carpeta `dist/` contiene la web completa para cualquier alojamiento estático.

## Fuentes y límites

Consulta [INVESTIGACION.md](INVESTIGACION.md). Datos revisados el 11 de octubre de 2026. El teléfono procede de Instagram; no figuraba en Google Maps. Los horarios sí se comprobaron en Maps. Los precios se consultan en las plataformas de pedidos para evitar presentar precios de reparto como precios de tienda.

Propuesta de diseño encargada por el usuario, pendiente de validación por el titular del negocio. No implica que sea su web oficial. Marca e imágenes pertenecen a sus respectivos titulares; no se ha concedido una licencia general sobre esos recursos. La imagen original de la mascota procede del perfil público de Instagram de Qkinhas (150 px). Se han creado tres poses derivadas con la herramienta integrada image_gen, con fondo transparente: saludo con café en lata transparente, sentada con la misma lata y buscando el local en un mapa. La figura sentada descansa en el marco de la foto de pistacho y saluda al pasar el ratón, pulsar o usar el teclado. La del mapa acompaña al teléfono y enlaza con Google Maps. También hay figuras junto al lema y al mensaje para compartir. Las animaciones respetan la preferencia de movimiento reducido del dispositivo.

## Publicación

La carpeta `dist/` puede publicarse desde GitHub Pages. No necesita compilación. Si cambia el dominio público definitivo, actualizar las URLs absolutas de imágenes en los metadatos de `dist/index.html`.

La configuración `.openai/hosting.json` corresponde a la copia alojada en Sites. Los archivos de esta copia no contienen credenciales.
