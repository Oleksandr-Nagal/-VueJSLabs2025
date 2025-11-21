export const news = [
    {
        id: 1,
        title: "Vue 3.5 Released: What's New?",
        summary: "Короткий огляд ключових можливостей та покращень у Vue 3.5.",
        date: "2025-02-10",
        image: "https://via.placeholder.com/800x360.png?text=Vue+3.5+Release",
        content: `
      Vue 3.5 приносить оптимізації продуктивності, покращену підтримку TypeScript
      та нові можливості для роботи з переходами. Розробники отримують більш
      зручні інструменти для побудови складних SPA-додатків.
    `
    },
    {
        id: 2,
        title: "Vite стає де-факто стандартом для фронтенду",
        summary: "Чому Vite витісняє Webpack у сучасних проєктах.",
        date: "2025-01-28",
        image: "https://via.placeholder.com/800x360.png?text=Vite+Bundler",
        content: `
      Завдяки миттєвому старту dev-сервера та простій конфігурації, Vite стає
      найбільш популярним інструментом для розробки на Vue, React та інших фреймворках.
      У статті розглядаються основні переваги та сценарії використання.
    `
    },
    {
        id: 3,
        title: "Dark / Light теми у сучасних веб-додатках",
        summary: "Як реалізувати перемикач теми та зберігати вибір користувача.",
        date: "2025-02-01",
        image: "https://via.placeholder.com/800x360.png?text=Dark+vs+Light+Theme",
        content: `
      Темна тема знижує навантаження на очі та може економити заряд батареї.
      Розглядаємо підхід із CSS-змінними, localStorage та інтеграцією у Vue-компоненти.
    `
    }
]

export function getArticleById(id) {
    const numericId = Number(id)
    return news.find(item => item.id === numericId)
}
