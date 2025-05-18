namespace Moment {
  export enum Moment {
    PREVIOUS_DAYS = 'PREVIOUS_DAYS',
    CEREMONY = 'CEREMONY',
    LUNCH = 'LUNCH',
    FOLLOWING_DAYS = 'FOLLOWING_DAYS',
  }

  export const Moments: Moment[] = Object.values(Moment);

  export const MomentLabels: Record<Moment, string> = {
    [Moment.PREVIOUS_DAYS]: 'Giorni precedenti',
    [Moment.CEREMONY]: 'Cerimonia',
    [Moment.LUNCH]: 'Ricevimento',
    [Moment.FOLLOWING_DAYS]: 'Giorni successivi',
  };

  export const MomentEmojis: Record<Moment, string> = {
    [Moment.PREVIOUS_DAYS]: '🗓️',
    [Moment.CEREMONY]: '💒',
    [Moment.LUNCH]: '🎉',
    [Moment.FOLLOWING_DAYS]: '🗓️',
  };
}

export default Moment;
