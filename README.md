# APIconsumer

- 1 Instalar el cliente http de angular en el modulo raiz src/app/app.module.ts
    - importarlo en la cabecera de la clase
    - declararlo en los imports
- 2 Crear un modelo que recoja los datos de la API (models/chuckobject.ts)

- 3 Crear un servicio que se encargue de pedir y enviar metodos al backend (API_service/chuck-api-service)
    - importar el cliente http
    - inyectar cliente http en el constructor 
    - crear un metodo que extraiga información (porque es una petición get) de la API
    - utilizar el modelo creado en el paso 2 y recoger observables del modelo en un metodo 

- 4 Crear un componente para utilizar el servicio (chuck/chuck.component.ts)
    - crear un objeto publico para acceder a el desde la vista y que recoja los datos del metodo del servicio
    - Inyectar el servicio
    - en el metodo onInit utilizar una funcion flecha para suscribirse al metodo de recoger informacion del servicio. Asignar el resultado al objeto request

- 5 Crear componente html(chuck.component.html)
    - mostrar el objeto publico creado en el componente y acceder a las prtopiedades que nos interesen

- 6 Mostrar el componente creado en el principal