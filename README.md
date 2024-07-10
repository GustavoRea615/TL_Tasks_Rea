# TL_Tasks_Rea
Web Project using NodeJs and Angular 

# Autor y medio de contacto  
Gustavo Rea  
GRea615@gmail.com  
4181144618  

## URL de despliegue
En estos momentos tendré desplegado el sistema frontend en la url:   `https://j29d1ghs-4200.usw3.devtunnels.ms/`   y el backend en:   `https://j29d1ghs-3000.usw3.devtunnels.ms/`  en caso de que el tunel este cerrado, favor de contactarme por whatsapp o llamada al número `4181144618`, por ahora lo mantendre abierto en horario de 10:00 A.M. a 6:00 P.M. de Lunes a Viernes hasta que se me indique que ya fue revisada la prueba tecnica.


## Instalación y Ejecución

### Backend

1. Clona el repositorio del backend.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno para la conexión a la base de datos (modifique el archivo `.gitignore` cometiendo una barbaridad de incluir el archivo `.env` con las credenciales a la BD de mongo cloud)
4. Inicia el servidor con `npm run dev`.

## Credenciales para la conexion a la base de datos
`MONGODB_URL=mongodb+srv://grea615:TQQkKmToOfl2X6Qm@innovatube.pz728um.mongodb.net/tl_tasks?retryWrites=true&w=majority`

### Frontend

1. Clona el repositorio del frontend.
2. Instala las dependencias con `npm install`.
3. Inicia la aplicación con `ng serve` o `npm start`.

### Backend - NodeJs y Express

backend-nodejs-tl           
├─ src                      
│  ├─ config                
│  │  └─ connectToDB.js     
│  ├─ controllers           
│  │  └─ taskController.js  
│  ├─ models                
│  │  └─ task.js            
│  └─ router.js             
├─ package-lock.json        
├─ package.json             
└─ server.js                


### Frontend - Angular y Material

frontend-angular-tl                                      
├─ src                                                   
│  ├─ app                                                
│  │  ├─ modules                                         
│  │  │  ├─ @core                                        
│  │  │  │  └─ components                                
│  │  │  │     └─ header                                 
│  │  │  │        ├─ header.component.css                
│  │  │  │        ├─ header.component.html               
│  │  │  │        ├─ header.component.spec.ts            
│  │  │  │        └─ header.component.ts                 
│  │  │  └─ terminal_log                                 
│  │  │     ├─ components                                
│  │  │     │  └─ tasks                                  
│  │  │     │     ├─ components                          
│  │  │     │     │  └─ modal-task                       
│  │  │     │     │     ├─ modal-task.component.css      
│  │  │     │     │     ├─ modal-task.component.html     
│  │  │     │     │     ├─ modal-task.component.spec.ts  
│  │  │     │     │     └─ modal-task.component.ts       
│  │  │     │     ├─ tasks.component.css                 
│  │  │     │     ├─ tasks.component.html                
│  │  │     │     ├─ tasks.component.spec.ts             
│  │  │     │     └─ tasks.component.ts                  
│  │  │     ├─ tasks.service.spec.ts                     
│  │  │     └─ tasks.service.ts                          
│  │  ├─ app-routing.module.ts                           
│  │  ├─ app.component.css                               
│  │  ├─ app.component.html                              
│  │  ├─ app.component.spec.ts                           
│  │  ├─ app.component.ts                                
│  │  └─ app.module.ts                                   
│  ├─ assets                                             
│  ├─ environments                                       
│  │  ├─ environment.prod.ts                             
│  │  └─ environment.ts                                  
│  ├─ favicon.ico                                        
│  ├─ index.html                                         
│  ├─ main.ts                                            
│  ├─ polyfills.ts                                       
│  ├─ styles.css                                         
│  └─ test.ts                                            
├─ angular.json                                          
├─ karma.conf.js                                         
├─ package-lock.json                                     
├─ package.json                                          
├─ README.md                                             
├─ tsconfig.app.json                                     
├─ tsconfig.json                                         
└─ tsconfig.spec.json                                    


## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-característica`).
3. Realiza tus cambios y haz commit (`git commit -am 'ABC(Tus iniciales) Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-característica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.

## Dependencias Y Versiones Usadas

### Backend

"dependencies": {  
    "axios": "^1.7.2",  
    "body-parser": "^1.20.2",  
    "cors": "^2.8.5",  
    "dotenv": "^16.4.5",  
    "express": "^4.19.2",  
    "mongodb": "^6.8.0",  
    "mongoose": "^8.5.0",  
    "nodemon": "^3.1.4"  
  }  

### Frontend

"dependencies": {  
    "@angular/animations": "^14.2.0",  
    "@angular/cdk": "^13.0.0",  
    "@angular/common": "^14.2.0",  
    "@angular/compiler": "^14.2.0",  
    "@angular/core": "^14.2.0",  
    "@angular/forms": "^14.2.0",  
    "@angular/material": "^13.0.0",  
    "@angular/platform-browser": "^14.2.0",  
    "@angular/platform-browser-dynamic": "^14.2.0",  
    "@angular/router": "^14.2.0",  
    "rxjs": "~7.5.0",  
    "tslib": "^2.3.0",  
    "zone.js": "~0.11.4"  
  },  
  "devDependencies": {  
    "@angular-devkit/build-angular": "^14.2.13",  
    "@angular/cli": "~14.2.13",  
    "@angular/compiler-cli": "^14.2.0",  
    "@types/jasmine": "~4.0.0",  
    "jasmine-core": "~4.3.0",  
    "karma": "~6.4.0",  
    "karma-chrome-launcher": "~3.1.0",  
    "karma-coverage": "~2.2.0",  
    "karma-jasmine": "~5.1.0",  
    "karma-jasmine-html-reporter": "~2.0.0",  
    "typescript": "~4.7.2"  
  }  

  