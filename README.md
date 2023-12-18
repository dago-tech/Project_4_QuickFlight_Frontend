# Proyecto Frontend de la app QuickFlight

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html" width="65" height="65"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css" width="65" height="65"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="65" height="65"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="65" height="65"/>

---

Esta aplicación cliente es la interfaz gráfica del proyecto QuickFlight el cual va a permitir crear vuelos de avión así como la solicitud de reservas de vuelos basados en datos como el origen, destino, fechas de partida y llegada, y por último la visualización de estadísticas.

- URL Publica: https://production.dftkopmtc08o1.amplifyapp.com/home

---

![Alt text](src/img/index.jpg)

![Alt text](src/img/list.jpg)


---

### Versiones usadas en desarrollo

- Sistema operativo local: Windows 10
- Entorno de desarrollo: Visual Studio Code
- Versión de Node: 18.13.0
- Versión react: 18.2.0
- Versión vite: 5.0.8

---


### Guía de descarga a local

- Se debe tener instalado Python y Git

1. Abre la terminal o línea de comandos en el computador donde deseas descargar el proyecto.

2. Navega al directorio donde deseas almacenar el repositorio.

3. Ejecuta el siguiente comando de Git para clonar el repositorio a la carpeta actual, esto copiará todas las ramas:
```sh
git clone https://github.com/dago-tech/Project_3_QuickFlight_Backend.git
```

4. Muévete a la rama main:
```sh
git checkout main
```
5. Crea y activa un entorno virtual en la carpeta del proyecto:

```sh
py -m venv venv
```
En powershell
```sh
venv\Scripts\activate
```
En bash
```sh
source venv/Scripts/activate
```

6. Instala todas las dependencias:
```sh
pip install -r requirements.txt
```

7. Como la base de datos corre en la nube ya se le ha realizado migraciones previamente y estos comandos no son necesarios, pero si creas la base de datos en local se deben ajustar los parametros de la base de datos en el archivo settings.py y ejecutar:

```sh
py manage.py makemigrations
py manage.py migrate
```

8. Correr el servidor de desarrollo:
```sh
py manage.py runserver
```

9. Ya se pueden hacer solicitudes HTTP a este servidor, por ejemplo, usando:
```sh
Metodo: GET
http://localhost:8000/api/flights/
```

### Docker

De esta aplicación también se puede generar un contenedor utilizando el archivo dockerfile incluido en la raiz del proyecto usando los siguientes comandos:

docker build -t nombre_de_la_imagen .
docker run -p 8000:8000 --name nombre_del_contenedor nombre_de_la_imagen