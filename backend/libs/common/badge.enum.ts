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
  CAT_FINDER = 'CAT_FINDER'
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
  [Badge.CAT_FINDER]: 'Cacciatore di gatti'
};
