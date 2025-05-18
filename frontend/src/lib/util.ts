import Moment from './moment.enum';

export const resolveMomentLabel = (momentLabel: string): string | undefined => {
  return (
    Moment.MomentEmojis[momentLabel as Moment.Moment] +
    ' ' +
    Moment.MomentLabels[momentLabel as Moment.Moment]
  );
};
