# DummyShop - React Next.js E-commerce App

Современное веб-приложение для интернет-магазина, построенное с использованием Next.js 15, React 19, TypeScript и
публичного API DummyJSON.

## 🚀 Технологический стек

- **Frontend Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Styling**: SCSS Modules
- **Code Quality**: ESLint, Prettier, Stylelint
- **API**: DummyJSON (https://dummyjson.com/)

## ✨ Функциональность

### Авторизация

- Форма логина с валидацией полей (минимум 3 символа)
- JWT-токен для аутентификации
- Автоматическое сохранение сессии в localStorage
- Редирект после успешного логина

### Главная страница

- Отображение 12 товаров в виде карточек
- Каждая карточка содержит: изображение, название, категорию, цену
- Кнопка "Add to cart" для авторизованных пользователей
- Адаптивная сетка товаров

### Навигация

- **Header**:
  - Для неавторизованных: ссылка "Login"
  - Для авторизованных: имя пользователя и кнопка "Logout"
- **Footer**:
  - Текущий год
  - Email авторизованного пользователя (если есть)

### Дополнительные возможности

- Индикаторы загрузки для всех API-запросов
- Обработка и отображение ошибок
- Полная адаптивность для мобильных и десктопных устройств
- Строгая типизация TypeScript

## 🛠️ Установка и запуск

### Предварительные требования

- Node.js 18+
- npm или yarn

### Шаги установки

1. **Клонируйте репозиторий**

```bash
git clone <repository-url>
cd dummyjson-shop
```

2. **Установите зависимости**

```bash
npm install
# или
yarn install
```

3. **Запустите в режиме разработки**

```bash
npm run dev
# или
yarn dev
```

4. **Откройте приложение** Перейдите по адресу [http://localhost:3000](http://localhost:3000)

## 🧪 Тестовые данные для входа

Используйте любые учетные данные с минимум 3 символами:

**Рекомендуемые тестовые аккаунты:**

- Username: `emilys` / Password: `emilyspass`
- Username: `michaelw` / Password: `michaelwpass`
- Username: `sophiab` / Password: `sophiabpass`

## 📝 Доступные команды

```bash
# Разработка
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start

# Линтинг и форматирование
npm run lint          # ESLint проверка
npm run lint:fix      # Автофикс ESLint ошибок
npm run format        # Prettier форматирование
npm run format:check  # Проверка форматирования
npm run stylelint     # SCSS линтинг
npm run stylelint:fix # Автофикс SCSS ошибок
```

## 🏗️ Структура проекта

```
src/
├── api/               # API клиенты и запросы
│   ├── client.ts      # Настройка Axios
│   ├── auth.ts        # Авторизация API
│   └── products.ts    # Продукты API
├── app/               # Next.js App Router страницы
│   ├── layout.tsx     # Корневой layout
│   ├── page.tsx       # Главная страница
│   ├── login/         # Страница логина
│   ├── loading.tsx    # Глобальный loading
│   ├── error.tsx      # Глобальная обработка ошибок
│   └── not-found.tsx  # 404 страница
├── components/        # React компоненты
│   ├── Header/        # Шапка сайта
│   ├── Footer/        # Подвал сайта
│   ├── ProductCard/   # Карточка товара
│   ├── ProductGrid/   # Сетка товаров
│   ├── LoginForm/     # Форма входа
│   ├── LoadingSpinner/# Спиннер загрузки
│   └── ErrorMessage/ # Сообщение об ошибке
├── store/             # Zustand сторы
│   ├── authStore.ts   # Состояние авторизации
│   └── productsStore.ts # Состояние товаров
├── styles/            # Глобальные стили
│   └── globals.scss   # SCSS переменные и утилиты  TODO:
├── types/             # TypeScript типы
│   └── index.ts       # Общие типы
└── utils/             # Утилиты
    ├── constants.ts   # Константы
    └── validation.ts  # Валидация форм
```

## 🎨 Стилизация

Проект использует SCSS модули с глобальными переменными:

- **Цветовая палитра**: Bootstrap-inspired цвета
- **Утилитарные классы**: `.btn`, `.container`, `.formControl`
- **Адаптивные брейкпоинты**: 576px, 768px, 992px, 1200px
- **CSS переменные**: Унифицированная цветовая схема

## 🔧 Конфигурация

### ESLint (eslint.config.mjs)

- Next.js правила
- TypeScript поддержка
- Prettier интеграция
- Современный flat config формат

### Prettier (.prettierrc)

- Одинарные кавычки
- Точки с запятой
- 80 символов в строке
- 2 пробела отступ

### Stylelint (.stylelintrc.json)

- SCSS стандарты
- BEM naming convention
- Автофикс стилей

## 📱 Адаптивность

Приложение полностью адаптивно:

- **Mobile First** подход
- **Flexbox/Grid** layouts
- **Responsive images** с Next.js Image
- **Touch-friendly** интерфейс для мобильных устройств

## 🔐 Безопасность

- JWT токены для аутентификации
- Автоматическая очистка сессии при 401 ошибке
- Валидация входных данных на клиенте
- HTTPS-only API запросы

## 📊 Производительность

- **Next.js Image** optimization
- **Code splitting** по маршрутам
- **Lazy loading** компонентов
- **Optimistic updates** в Zustand
- **Request deduplication** в Axios

## 🐛 Обработка ошибок

- Глобальная обработка ошибок через error boundaries
- Пользовательские сообщения об ошибках
- Retry механизмы для API запросов
- Graceful fallback для изображений

## 🚀 Деплой

```bash
# Сборка
npm run build

# Статические файлы будут в .next/ папке
# Деплой на Vercel, Netlify или любой Node.js хостинг
```

---

**Разработано с ❤️ используя современные веб-технологии**
