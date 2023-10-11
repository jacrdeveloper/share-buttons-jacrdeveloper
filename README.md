# Share Buttons jacrdeveloper Plugin

## Descripción

Este plugin permite a los desarrolladores web añadir fácilmente botones sociales en sus sitios web para compartir contenido en diferentes plataformas de redes sociales.

## Características

- Fácil de instalar
- Soporte para múltiples plataformas de redes sociales
- Personalizable
- Ligero y rápido
- Redes sociales soportadas: Facebook, Twitter, Whatsapp, Linkedin, Reddit, Pinterest, Portapapeles, Correo electrónico e Impresión.

## Requisitos

- JavaScript habilitado en el navegador
- JQuery
- Compatible con todos los navegadores modernos

## Instalación

1. Descarga el fichero js y css del plugin ubicados en la carpeta src.
2. Incluye el archivo js y css en tú proyecto web.
3. Añade los botones sociales en tu HTML como se muestra en el ejemplo de uso.
4. Configúralo como estimes oportuno.

## Ejemplo de uso

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mi sitio web</title>
  <!-- jquery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!-- plugin -->
  <link rel="stylesheet" href="path/to/share-buttons-jacrdeveloper.css" />
  <script src="path/to/share-buttons-jacrdeveloper.js"></script>
</head>
<body>

	<h1> Hola mundo - jacrdeveloper</h1>
  <script type="text/javascript">
    $(document).ready(function() {
        $('body').socialShareMenu();
    });
</script>

</body>
</html>
```

Hay otro ejemplo en mi web personal: [Ir a la web]https://www.jacrdeveloper.es y un par de capturas en el repositorio:
- captura_1_share_buttons_jacrdeveloper.png
- captura_2_share_buttons_jacrdeveloper.png

## Opciones de configuración

| Opción     | Descripción                           | Tipo     | Valor predeterminado |
|------------|---------------------------------------|----------|----------------------|
| `facebook`   | Mostrar botón Facebook       | `string` | `true`               |
| `twitter`   | Mostrar botón Twitter       | `string` | `true`               |
| `linkedin`   | Mostrar botón Linkedin       | `string` | `true`               |
| `whatsapp`   | Mostrar botón Whatsapp       | `string` | `true`               |
| `pinterest`   | Mostrar botón Pinterest       | `string` | `true`               |
| `reddit`   | Mostrar botón Reddit       | `string` | `true`               |
| `copyLink`   | Mostrar botón Copiar al portapapeles       | `string` | `true`               |
| `envelop`   | Mostrar botón Correo electrónico       | `string` | `true`               |
| `print`   | Mostrar botón Imprimir       | `string` | `true`               |
| `urlToShare`| URL a compartir| `string`  | `window.location.href`                 |
| `titleToShare`| Título a compartir| `string`  | `document.title`                 |

## Donaciones

Si encuentras útil este plugin y me quieres invitar a un café :)

- **PayPal**: [Invítame a un café :)]https://www.paypal.me/jacrdeveloper

Tu apoyo es muy apreciado. ¡Gracias!

## Contribuir

Si tienes alguna idea o encuentras un error, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
