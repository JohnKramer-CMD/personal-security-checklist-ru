// src/routes/_404.tsx
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <h1>404 Не найдено</h1>
      <p>Запрашиваемая страница не существует.</p>
      <a href="/">Вернуться на главную</a>
    </div>
  );
});
