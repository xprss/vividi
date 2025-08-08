import Moment from './moment.enum';

export const resolveMomentLabel = (
  momentLabel: string,
  full: boolean = true
): string | undefined => {
  if (full) {
    return (
      Moment.MomentEmojis[momentLabel as Moment.Moment] +
      ' ' +
      Moment.MomentLabels[momentLabel as Moment.Moment]
    );
  }
  return Moment.MomentEmojis[momentLabel as Moment.Moment];
};
