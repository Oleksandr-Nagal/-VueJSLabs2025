# Lab 5 – FinanceTrack SaaS Landing (PrimeVue)

## Запуск

У директорії `lab5/` створіть Vite-проєкт, скопіюйте цю папку `src/` та встановіть залежності.

```bash
npm create vite@latest lab5 -- --template vue
cd lab5
npm install

npm install primevue primeicons

npm run dev
```

> Цю папку `src/` можна просто покласти замість стандартної `src` від Vite.

---

## Що реалізовано згідно з ТЗ

### 1. Стек

- Vue 3 (Composition API)
- PrimeVue (Button, Card, InputText, Textarea, InputNumber, Dropdown, Tag, Chip, Toast, Accordion)
- Власний плагін `copyToClipboard` у `src/plugins/copyToClipboard.js`

Підключення в `main.js`:

```js
import CopyToClipboardPlugin from './plugins/copyToClipboard'
app.use(CopyToClipboardPlugin)
```

### 2. Секції лендингу

Всі секції підключені в `App.vue` як окремі компоненти:

- `HeroSection` – hero-блок з описом FinanceTrack, CTA, чіпами, міні-картками з метрикою.
- `ProblemSolutionSection` – "Проблема / Рішення" у вигляді двох колонок.
- `FeaturesSection` – ключові фічі у гріді карточок.
- `HowItWorksSection` – 3 кроки роботи сервісу.
- `PricingSection` – тарифи + простий калькулятор вартості.
- `TestimonialsSection` – відгуки користувачів.
- `FaqSection` – FAQ на Accordion (PrimeVue).
- `ContactSection` – контактна форма + валідація + Toast.

Є `MainHeader` та `MainFooter` з якірною навігацією.

### 3. PrimeVue компоненти

Використані компоненти PrimeVue:

- `Button`, `Card`, `InputText`, `Textarea`, `InputNumber`, `Dropdown`, `Tag`, `Chip`, `Toast`, `Accordion`, `AccordionTab`.
- Підключені в `main.js` як глобальні компоненти.
- Для стилів: `saga-blue` тема, `primevue.min.css`, `primeicons.css`.

### 4. Плагін `copyToClipboard`

Файл `src/plugins/copyToClipboard.js`:

- Реєструє глобальний метод `app.config.globalProperties.$copyToClipboard`.
- Працює через `navigator.clipboard.writeText` або fallback з `<textarea>`.
- Повертає `true/false` залежно від успіху.

#### Використання плагіна (мінімум 3 місця):

1. `HeroSection` – кнопка "Copy promo FINANCE2025".
2. `PricingSection` – кнопка "Copy plan code" у кожному тарифному плані.
3. `ContactSection` – кнопка "Copy email" для копіювання `support@financetrack.app`.

У кожному випадку після копіювання показується `Toast` з повідомленням про успіх / помилку.

### 5. Калькулятор у тарифах

Компонент `PricingSection.vue`:

- Поля керування:
  - `billingCycle` (`Dropdown`) – `Monthly` / `Yearly` (2 місяці безкоштовно).
  - `currency` (`Dropdown`) – `USD` / `EUR` (простий коефіцієнт).
  - `seats` (`InputNumber`) – кількість користувачів.
- Для кожного плану (`Starter`, `Growth`, `Scale`) розраховується вартість з урахуванням:
  - базової ціни;
  - включеної кількості місць;
  - додаткових місць;
  - множника за billing (monthly/yearly);
  - вибраної валюти.
- Результат відображається в картках планів.

### 6. Контактна форма + валідація + Toast

Компонент `ContactSection.vue`:

- Поля форми:
  - name
  - email
  - company (необов’язкове)
  - message
- Простий валідатор:
  - `name` – обов’язкове;
  - `email` – регулярка `/.+@.+\..+/`;
  - `message` – не менше 10 символів.
- При помилці:
  - помилки відображаються під полями;
  - показується Toast з попередженням.
- При успіху:
  - Toast з типом `success`;
  - форма очищується.

### 7. Стилізація

- Всі компоненти стилізовані через `<style scoped>`.
- Базова темна кольорова схема (фон, текст, border, accent).
- Адаптивність для вужчих екранів (media queries у ключових секціях).

---

## Висновок

Цей проєкт демонструє:

- використання PrimeVue як бібліотеки UI-компонентів;
- побудову цілісного лендингу SaaS-продукту;
- створення та підключення власного плагіна (`copyToClipboard`) і його використання у кількох сценаріях;
- інтеграцію Toast-сервісу для користувацького фідбеку;
- побудову простого калькулятора вартості тарифів для Finance Tracker SaaS;
- базову клієнтську валідацію форму з Vue 3 (Composition API).
