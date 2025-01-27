<h1 align="center">Чеклист персональной безопасности</h1>

<p align="center">
<b><i>Исчерпывающий список рекомендаций для защиты вашей цифровой жизни</i></b>
<br>
<b>🌐 <a href="https://digital-defense.io/">digital-defense.io</a></b><br>
<br>
<a href="https://personal-security-checklist.as93.net"><img src="https://i.ibb.co/Rb6P6h6/shield.png" width="64"><br></a>
<br>
<kbd><br>👉 <a href="https://github.com/JohnKramer-CMD/personal-security-checklist/blob/HEAD/CHECKLIST.md"><b>Открыть чеклист</b></a> 👈<br><br></kbd>
<br>
</p>

<details>
    <summary><b>Содержание</b></summary>
    
- [Чеклист](#чеклист)
- [Веб-сайт](#веб-сайт)
- [API](#api)
- [Участие в разработке](#участие-в-разработке)
- [Благодарности](#благодарности)
- [Лицензия](#лицензия)
</details>

---

## Чеклист

Полная версия чеклиста доступна в файле [`CHECKLIST.md`](CHECKLIST.md).  
<sub>Исходные данные: [`personal-security-checklist.yml`](personal-security-checklist.yml)</sub>

---

## Веб-сайт

**Рекомендуемый способ использования**: **[digital-defense.io](https://digital-defense.io/)**

Возможности:
- Просмотр чеклиста с фильтрами
- Отслеживание прогресса
- Визуализация результатов

<p align="center">
<img width="600" src="https://i.ibb.co/jzKn05H/digital-defense.png">
</p>

### Техническая информация
- Исходный код: [`web/`](web)
- Стек: Qwik + TypeScript + DaisyUI

### Локальная разработка
Требования: Node.js и Git

```bash
git clone git@github.com:JohnKramer-CMD/personal-security-checklist-ru.git
cd personal-security-checklist/web
yarn
yarn dev
```
### Деплой
```bash
yarn build
yarn build.static
```
Разместите содержимое папки dist/ на вашем хостинге.

---

### API

Бесплатный доступ к данным через REST API:

Базовый URL: digital-defense.io/api

### Эндпоинты:

    /api/checklists

    /api/checklists/[название-или-индекс]

    /api/checklists/[название]/[номер-пункта]

    /api/search/[запрос]

---

### Участие в разработке

    Редактируйте personal-security-checklist.yml

    Указывайте источники для изменений

    Соблюдайте правила участия

    Придерживайтесь кодекса поведения
---


