import { createI18n } from 'vue-i18n'

const messages = {
  ua: {
    app: {
      brand: 'Vue Магазин',
      brandWelcome: 'Ласкаво просимо, @.upper:{name}!'
    },
    nav: {
      products: 'Товари',
      cart: 'Кошик',
      profile: 'Профіль'
    },
    products: {
      title: 'Список товарів',
      addToCart: 'Додати до кошика',
      price: 'Ціна',
      empty: 'Наразі немає товарів.'
    },
    cart: {
      title: 'Ваш кошик',
      empty: 'Кошик порожній',
      total: 'До сплати',
      quantity: 'Кількість',
      remove: 'Видалити',
      clear: 'Очистити кошик'
    },
      profile: {
          title: "Профіль користувача",
          fullName: "Ім'я та прізвище",
          email: "Email",
          phones: "Телефони",
          addPhone: "Додати телефон",
          save: "Зберегти профіль",
          saved: "Профіль успішно збережено!"
      },
      form: {
          required: "Це поле є обов'язковим",
          min3: "Мінімум 3 символи",
          email: "Введіть правильний email",
          phoneRequired: "Телефон обов'язковий",
          phoneInvalid: "Невірний формат телефону",
          atLeastOnePhone: "Має бути хоча б один телефон"
      }
      ,
    locale: {
      switchLabel: 'Мова'
    }
  },
  en: {
    app: {
      brand: 'Vue Shop',
      brandWelcome: 'Welcome, @.upper:{name}!'
    },
    nav: {
      products: 'Products',
      cart: 'Cart',
      profile: 'Profile'
    },
    products: {
      title: 'Products list',
      addToCart: 'Add to cart',
      price: 'Price',
      empty: 'No products yet.'
    },
    cart: {
      title: 'Your cart',
      empty: 'Cart is empty',
      total: 'Total',
      quantity: 'Quantity',
      remove: 'Remove',
      clear: 'Clear cart'
    },
      profile: {
          title: "User Profile",
          fullName: "Full name",
          email: "Email",
          phones: "Phones",
          addPhone: "Add phone",
          save: "Save profile",
          saved: "Profile saved successfully!"
      },
      form: {
          required: "This field is required",
          min3: "Minimum 3 characters",
          email: "Invalid email",
          phoneRequired: "Phone is required",
          phoneInvalid: "Invalid phone number",
          atLeastOnePhone: "At least one phone is required"
      }
      ,
    locale: {
      switchLabel: 'Language'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages,
  modifiers: {
    upper: (value) => String(value).toUpperCase()
  }
})
