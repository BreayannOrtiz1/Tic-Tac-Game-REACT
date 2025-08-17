# 🎮 Tic Tac Toe Game

Un juego clásico de Tic Tac Toe (Tres en Raya) desarrollado con Node.js y React, implementando las mejores prácticas de desarrollo moderno.

## ✨ Características

- 🎯 Interfaz de usuario intuitiva y responsiva
- 🎨 Diseño moderno con CSS/Styled Components
- ⚡ Rendimiento optimizado con React Hooks
- 📱 Compatible con dispositivos móviles
- 🔄 Reinicio de juego instantáneo
- 🏆 Detección automática de ganador y empates
- ♿ Accesibilidad mejorada (ARIA labels)

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18+, CSS3/Styled Components
- **Backend**: Node.js, Express.js
- **Build Tools**: Vite/Create React App
- **Linting**: ESLint, Prettier
- **Package Manager**: npm/yarn

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 16.0 o superior)
- npm (versión 7.0 o superior) o yarn

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tic-tac-toe-game.git
   cd tic-tac-toe-game
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   # o
   yarn start
   ```

4. **Abre tu navegador**
   
   Ve a `http://localhost:3000` para jugar

## 🎮 Cómo Jugar

1. El juego comienza con el jugador X
2. Haz clic en cualquier casilla vacía para hacer tu jugada
3. Los jugadores alternan turnos (X y O)
4. El primer jugador en conseguir tres símbolos en línea (horizontal, vertical o diagonal) gana
5. Si todas las casillas se llenan sin ganador, es empate
6. Haz clic en "Nuevo Juego" para reiniciar

```

## 🏗️ Estructura del Proyecto

```
tic-tac-toe-game/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Board/
│   │   │   ├── Board.jsx
│   │   │   ├── Board.css
│   │   │   └── Board.test.js
│   │   ├── Square/
│   │   │   ├── Square.jsx
│   │   │   ├── Square.css
│   │   │   └── Square.test.js
│   │   └── Game/
│   │       ├── Game.jsx
│   │       ├── Game.css
│   │       └── Game.test.js
│   ├── hooks/
│   │   ├── useGameLogic.js
│   │   └── useGameLogic.test.js
│   ├── utils/
│   │   ├── gameHelpers.js
│   │   └── gameHelpers.test.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server/
│   ├── app.js
│   ├── routes/
│   └── middleware/
├── package.json
├── README.md
└── .gitignore
```

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas unitarias

## 🎨 Buenas Prácticas Implementadas

### Código Limpio
- Funciones pequeñas y enfocadas en una sola responsabilidad
- Nombres descriptivos para variables y funciones
- Comentarios cuando es necesario
- Separación clara de responsabilidades

### React Best Practices
- Uso de React Hooks para manejo de estado
- Componentes funcionales reutilizables
- Props tipadas (PropTypes o TypeScript)
- Memorización con useMemo/useCallback cuando es apropiado

### Performance
- Lazy loading de componentes
- Optimización de re-renders
- Bundle splitting
- Imágenes optimizadas

## 🚀 Despliegue

### Netlify/Vercel
1. Conecta tu repositorio
2. Configura el comando de build: `npm run build`
3. Establece la carpeta de publicación: `build`

### GitHub Pages
```bash
npm run build
npm run deploy
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Sigue las convenciones de código existentes
- Agrega pruebas para nuevas funcionalidades
- Actualiza la documentación si es necesario
- Asegúrate de que todas las pruebas pasen

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
- Email: tu.email@ejemplo.com

## 🙏 Agradecimientos

- Inspirado en el tutorial oficial de React
- Comunidad de desarrolladores por el feedback
- Contribuidores del proyecto

## 📊 Roadmap futuro

- [ ] Modo multijugador online
- [ ] Sistema de puntuación persistente
- [ ] Diferentes tamaños de tablero (4x4, 5x5)
- [ ] Modo contra IA con diferentes dificultades
- [ ] Temas y personalización visual
- [ ] Internacionalización (i18n)

---

¿Te gustó el proyecto? ¡Dale una ⭐ en GitHub!
