# Lab 4 – Vue.js: Pinia, i18n, VeeValidate (Yup)

## Запуск

```bash
npm install
npm install vue-router@4 pinia pinia-plugin-persistedstate vue-i18n@9 vee-validate yup @vee-validate/yup
npm run dev
```

(Скопіюй вміст цієї папки `src/` у свій Vite-проєкт у каталозі `lab4/` або створи новий через `npm create vite@latest` та заміни стандартну папку `src`.)

---

## Структура

- `src/main.js` – ініціалізація Vue, Pinia (+ persistedstate), Vue Router, i18n.
- `src/router/index.js` – маршрути:
  - `/` → ProductsPage
  - `/cart` → CartPage
  - `/profile` → ProfilePage
  - catch-all `/:pathMatch(.*)*` → NotFound
  - `createWebHistory`, `scrollBehavior`, `linkActiveClass`.

- `src/stores/productsStore.js` – локальний список товарів.
- `src/stores/cartStore.js` – кошик з товарами, Pinia + `persist: true`.
- `src/stores/profileStore.js` – збережений профіль користувача.
- `src/stores/localeStore.js` – поточна мова (ua/en), `persist: true`.

- `src/i18n/index.js` – налаштування `vue-i18n`:
  - `legacy: false`, `useI18n`;
  - локалі `ua` / `en`;
  - модифікатор `upper` → `@.upper:{name}` у рядку `brandWelcome`.

- `components/layout/MainHeader.vue` – хедер із навігацією та LanguageSwitcher.
- `components/layout/MainFooter.vue` – футер.
- `components/ui/LanguageSwitcher.vue` – перемикач мови (ua/en).

- `pages/ProductsPage.vue` – список товарів, кнопка «Add to cart».
- `pages/CartPage.vue` – кошик з таблицею, qty, total, clear.
- `pages/ProfilePage.vue` – форма профілю з VeeValidate + Yup + масивом телефонів.
- `pages/NotFound.vue` – сторінка 404.

---

## Що реалізовано згідно з вимогами

### Маршрути та навігація

- `/` — список товарів (Products).
- `/cart` — кошик.
- `/profile` — сторінка профілю.
- `/:pathMatch(.*)*` → `NotFound.vue`.
- Router:
  - `createWebHistory()`;
  - `scrollBehavior` → скрол угору;
  - `linkActiveClass: 'active-link'` для стилізації активного пункту меню.
- Навігація знаходиться в `MainHeader.vue`.

### Pinia + persistedstate

- `cartStore`:
  - `items: Array<{ id, title, price, qty }>`;
  - getters: `totalItems`, `totalPrice`;
  - actions: `addToCart`, `removeItem`, `changeQty`, `clearCart`;
  - `persist: true` → кошик зберігається між перезавантаженнями.

- `profileStore`:
  - `fullName`, `email`, `phones: string[]`;
  - `setProfile(payload)`;
  - `persist: true` → профіль зберігається.

- `localeStore`:
  - `locale: 'ua' | 'en'`;
  - `setLocale(lang)`;
  - `persist: true` → вибір мови зберігається.

### i18n, useI18n, t(), модифікатори

- Файл `i18n/index.js`:
  - локалі `ua`, `en` з окремими словниками;
  - модифікатор `upper` у налаштуваннях i18n;
  - рядок `brandWelcome: 'Ласкаво просимо, @.upper:{name}!'` / `'Welcome, @.upper:{name}!'`.
- У `MainHeader.vue` використовується `useI18n()` і `t()` для перекладу:
  - назв вкладок;
  - бренду/лейбла.
- `LanguageSwitcher.vue` – перемикає `locale` в i18n + у Pinia store.

### Форма профілю, VeeValidate + Yup, масив телефонів

- `ProfilePage.vue`:
  - `useForm`, `useField`, `useFieldArray` з `vee-validate`;
  - `yup` + `yupResolver` для `validationSchema`;
  - поля:
    - `fullName` (required, min 3);
    - `email` (required, email);
    - `phones: string[]` (мінімум 1 елемент);
  - `phones` побудовано через `useFieldArray('phones')`:
    - кнопка `Add phone` додає новий елемент;
    - кнопка `×` видаляє рядок;
    - валідатор вимагає хоча б один номер.
  - при успішному сабміті викликається `profileStore.setProfile(values)`.

### Стилі, SFC, CSS Modules

- `<style scoped>` використано в основних компонентах (layout, pages).
- Продемонстровано базові SFC-стилі та каскад.
- При бажанні можна додати CSS Modules у компоненти товарів / форми, але для формату сдачі достатньо поточного варіанту.

### Анімації переходів сторінок

- В `App.vue`:
  - `<RouterView v-slot="{ Component }">` обгорнуто в `<Transition name="route-fade" mode="out-in">`;
  - стилі для `route-fade-*` демонструють плавний fade/slide між сторінками.

### Модальне вікно (не обовʼязкове для цієї лаби)

За потреби можна винести модальне вікно або інші UI-елементи окремим компонентом і під’єднати через Teleport, але в умовах Lab 4 основний фокус — на Pinia/i18n/VeeValidate.

---

## Висновок щодо стилізації та стану у Vue.js

У цій лабораторній роботі продемонстровано, як:

1. **Pinia** спрощує роботу зі станом (cart/profile/locale) та дозволяє легко додати персистентність через `pinia-plugin-persistedstate`.
2. **Vue I18n** дає можливість організувати багатомовний інтерфейс, винести тексти в окремі словники та використовувати модифікатори (`upper`) для додаткової обробки рядків.
3. **VeeValidate + Yup** забезпечують декларативну валідацію форм, у тому числі масивів полів (масив телефонів через `useFieldArray`).
4. Використання `<Transition>` над `<RouterView>` дозволяє зробити навігацію між сторінками візуально приємною без складних налаштувань.
