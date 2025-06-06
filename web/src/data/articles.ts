
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [
  {
    title: 'Почему важна безопасность?',
    description: 'Почему вашу цифровую безопасность и приватность нужно воспринимать серьезно.',
    slug: 'importance-of-digital-security',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/0_Why_It_Matters.md',
  },
  {
    title: 'Краткий список безопасности',
    description: 'Основной список слишком длинный? Вот краткая версия',
    slug: 'short-list',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
  },
  {
    title: 'Полезные ссылки',
    description: 'Справочник ссылок на дополнительные инструменты и ресурсы.',
    slug: 'helpful-links',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
    warningMessage: 'Статья написана в 2020 году и требует обновления.',
  },
  {
    title: 'Гаджеты безопасности',
    description: 'Полезные устройства, помогающие защитить вашу приватность и безопасность.',
    slug: 'privacy-gadgets',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
    warningMessage: 'Статья устарела и может содержать неточную информацию. '
      +'Рекомендуется проверить сведения перед использованием перечисленных продуктов.',
  },
  {
    title: 'Софт, уважающий приватность',
    description: 'Большой список программных альтернатив, уважающих конфиденциальность.',
    slug: 'awesome-privacy',
    markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
    warningMessage: 'This resource has moved! You can now access it at github.com/Lissy93/awesome-privacy',
  },
];

export default articles;
