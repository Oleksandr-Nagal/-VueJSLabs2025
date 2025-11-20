# Lab 2 – Vue.js Mini Admin

## Запуск

```bash
npm install
npm run dev
```

(Скопіюй вміст цієї папки `src/` у свій Vite-проєкт або створи новий через `npm create vite@latest` та заміни стандартну папку `src`.)

## Що де використано

- **props / emits**
    - `components/inputs/BaseInput.vue` – приймає label, type, error, тощо.
    - `pages/admin/Users.vue` → передає дані до `UserDetails` через параметр роута (props).

- **v-model / defineModel**
    - `BaseInput.vue` використовує `defineModel`.
    - У формах `Login.vue`, `Register.vue` – двостороннє звʼязування з полями.

- **provide / inject**
    - `store/auth.js` – функції `provideAuth()` / `useAuth()`.
    - `AdminLayout.vue` викликає `provideAuth()`.
    - `Sidebar.vue` через `useAuth()` показує імʼя та email користувача + кнопку Logout.

- **Слоти**
    - `components/layout/AuthWrapper.vue`:
        - дефолтний слот для форм Login/Register;
        - слот `#footer` для посилань.
    - `components/layout/Sidebar.vue`:
        - слот для меню навігації (RouterLink-ів).
    - `components/reports/ReportsTable.vue`:
        - scoped-slot `#row="{ item }"` – в `Reports.vue` рендеримо рядок таблиці з батьківського компоненту.

- **KeepAlive + життєвий цикл**
    - `pages/admin/Dashboard.vue` – вкладки Overview/Activity.
    - Обгорнуті в `<KeepAlive include="Overview,Activity" max="2">`.
    - `Overview.vue` демонструє хуки `onMounted` / `onUnmounted` (таймер, який зберігається між перемиканнями вкладок).

- **Роутинг**
    - `router/index.js`:
        - history: `createWebHistory()`;
        - `scrollBehavior` – скрол вгору;
        - `linkActiveClass: 'active-link'` – стилізація активних посилань.
    - Маршрути:
        - `/`, `/login`, `/register` – `meta.public = true`;
        - `/admin` + дочірні `/admin/dashboard`, `/admin/users`, `/admin/user/:id`, `/admin/reports` – `meta.requiresAuth = true`;
        - catch-all `/:pathMatch(.*)*` – `NotFound.vue`.
    - **Guard beforeEach**:
        - перевіряє `meta.requiresAuth` та функцію `isAuthenticated()` зі `store/auth.js`;
        - неавторизованих перекидає на `/login`.

- **Імітація бекенду**
    - Файл `store/auth.js`:
        - `login`, `register`, `logout`, `isAuthenticated`;
        - `userRef` як глобальний стан авторизованого користувача (без реального API).

## Коментар

Цього достатньо для захисту лабораторної роботи: продемонстровані всі механізми з вимог (props, emits, v-model/defineModel, provide/inject, слоти, KeepAlive, роутинг з guardʼами та lazy-loading). 
