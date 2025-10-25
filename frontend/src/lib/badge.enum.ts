export enum Badge {
  BRIDE = 'BRIDE',
  GROOM = 'GROOM',
  BESTMAN = 'BESTMAN',
  BRIDESMAID = 'BRIDESMAID',
  PARENT = 'PARENT',
  DEVELOPER = 'DEVELOPER',
  QUIZ_FIRST_CLASSIFIED = 'QUIZ_FIRST_CLASSIFIED',
  QUIZ_SECOND_CLASSIFIED = 'QUIZ_SECOND_CLASSIFIED',
  QUIZ_THIRD_CLASSIFIED = 'QUIZ_THIRD_CLASSIFIED',
  QUIZ_LAST_CLASSIFIED = 'QUIZ_LAST_CLASSIFIED',
  CAT_FINDER = 'CAT_FINDER',
  GUEST = 'GUEST',
}

export const BadgeLabels: Record<Badge, string> = {
  [Badge.BRIDE]: 'Sposa',
  [Badge.GROOM]: 'Sposo',
  [Badge.BESTMAN]: 'Testimone',
  [Badge.BRIDESMAID]: 'Damigella',
  [Badge.PARENT]: 'Genitore',
  [Badge.DEVELOPER]: 'Sviluppatore',
  [Badge.QUIZ_FIRST_CLASSIFIED]: 'Primo posto al quiz',
  [Badge.QUIZ_SECOND_CLASSIFIED]: 'Secondo posto al quiz',
  [Badge.QUIZ_THIRD_CLASSIFIED]: 'Terzo posto al quiz',
  [Badge.QUIZ_LAST_CLASSIFIED]: 'Ultimo posto al quiz',
  [Badge.CAT_FINDER]: 'Cacciatore di gatti',
  [Badge.GUEST]: 'Ospite',
};

export const BadgeEmojis: Record<Badge, string> = {
  [Badge.BRIDE]: '👰',
  [Badge.GROOM]: '🤵',
  [Badge.BESTMAN]: '🤝',
  [Badge.BRIDESMAID]: '💐',
  [Badge.PARENT]: '🏠',
  [Badge.DEVELOPER]: '🧑‍💻',
  [Badge.QUIZ_FIRST_CLASSIFIED]: '🥇',
  [Badge.QUIZ_SECOND_CLASSIFIED]: '🥈',
  [Badge.QUIZ_THIRD_CLASSIFIED]: '🥉',
  [Badge.QUIZ_LAST_CLASSIFIED]: '😵‍💫',
  [Badge.CAT_FINDER]: '🐈',
  [Badge.GUEST]: '😄',
};
