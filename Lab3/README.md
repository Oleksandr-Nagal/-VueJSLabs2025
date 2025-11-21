# Lab 3 – Vue.js News Mini-Site

## Запуск

```bash
npm install
npm run dev
```

(Скопіюй вміст цієї папки `src/` у свій Vite-проєкт у каталозі `lab3/` або створи новий через `npm create vite@latest` та заміни стандартну папку `src`.)

---

## 📸 Скріншоти

```markdown
### Головна сторінка (список новин)
![Home](./screenshots/home.png)

### Сторінка новини з модалкою реклами
![Article](./screenshots/article.png)

### Про нас
![About](./screenshots/about.png)
```

---

## Що реалізовано згідно з вимогами

### Маршрути та навігація

- `/` — головна (список новин) → `pages/Home.vue`
- `/article/:id` — сторінка повної новини → `pages/Article.vue`
- `/about` — інформаційна сторінка → `pages/About.vue`
- Catch-all `/:pathMatch(.*)*` → `pages/NotFound.vue`
- `router/index.js`:
  - `createWebHistory()`
  - `scrollBehavior` → скрол угору при переході
  - `linkActiveClass: 'active-link'` для підсвітки активних посилань

### Хедер / футер / лейаут

- `components/layout/SiteHeader.vue`:
  - логотип
  - навігація Home / About
  - перемикач теми `ThemeToggle`
- `components/layout/SiteFooter.vue`:
  - копірайт
  - навігаційні посилання
- `AdSlot.vue` — статичний рекламний слот, використовується на головній та сторінці "Про нас".

### Список новин (Home)

- Дані новин у `data/news.js`.
- На сторінці `Home.vue`:
  - рендер списку новин з локального масиву `news`.
  - кожна новина — компонент `NewsCard.vue` (CSS Modules).

### Сторінка новини (Article)

- `pages/Article.vue`:
  - повний перегляд: заголовок, дата, зображення, контент.
  - банер «Реклама» всередині статті.
  - по кліку відкривається модальне вікно з рекламою `AdModal.vue`.
- `components/ui/AdModal.vue`:
  - реалізація через `<Teleport to="body">`
  - повноекранне перекриття
  - кнопка закриття
  - плавна анімація через `<Transition>` (класи `modal-fade-*`).

### Перемикач теми (Light/Dark)

- `composables/useTheme.js`:
  - зберігання стану теми (`light` / `dark`)
  - збереження у `localStorage` під ключем `lab3-theme`
  - встановлення атрибуту `data-theme` на `<html>`.
- `ThemeToggle.vue`:
  - кнопка-тогл у хедері.
  - використання `useTheme()` для перемикання.
  - приклад `v-bind()` у CSS (`accentColor` для стилю елемента).

- Глобальні CSS-змінні для тем:
  - оголошені в `App.vue` в стилях:
    - `--bg-body`, `--bg-surface`, `--text-color`, `--accent-color`, тощо.

### Стилізація (SFC / Modules / порядок каскаду)

Обовʼязкові пункти виконані:

- `<style scoped>`:
  - використано в більшості компонентів (`SiteHeader`, `SiteFooter`, `Home`, `Article`, `About`, `NotFound`, `AdSlot`, `AdModal`, `ThemeToggle`).
- **CSS Modules**:
  - `components/news/NewsCard.module.css` + `NewsCard.vue`:
    - імпорт модуля: `import styles from './NewsCard.module.css'`
    - використання: `:class="styles.card"`, `:class="styles.image"`, `styles['read-more-btn']`.

### Анімації переходів сторінок

- В `App.vue`:
  - `<RouterView v-slot="{ Component }">` обгорнуто в `<Transition name="route-fade" mode="out-in">`.
- Оголошені базові класи:
  - `route-fade-enter-from`, `route-fade-enter-active`, `route-fade-enter-to`,
  - `route-fade-leave-from`, `route-fade-leave-active`, `route-fade-leave-to`.

### Модальне вікно реклами

- Відкривається з банеру «Реклама» на сторінці `Article.vue`.
- Реалізовано через `<Teleport to="body">` + `<Transition>` в `AdModal.vue`.
- Плавна анімація входу / виходу (`modal-fade-*`).

---

## Висновок про стилізацію у Vue.js

У цій лабораторній роботі продемонстровано кілька підходів до стилізації компонентів у Vue:

1. **`<style scoped>`** дозволяє інкапсулювати стилі всередині компонента та не боятися конфліктів імен.
2. **CSS Modules** дають більш жорстку ізоляцію стилів і зручне використання класів через обʼєкт `styles`, що особливо практично для великих застосунків.
3. **CSS-змінні та атрибут `data-theme`** спрощують реалізацію світлої/темної тем, дозволяючи перемикати кольорову схему без переписування стилів.
4. **`v-bind()` у CSS** дає можливість звʼязати реактивні значення з CSS-властивостями, що робить стилі більш динамічними.

Разом ці техніки демонструють гнучкість Vue SFC та те, як можна поєднувати різні підходи для створення охайного, підтримуваного інтерфейсу.
