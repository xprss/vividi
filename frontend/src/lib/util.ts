import Moment from './moment.enum';

export const resolveMomentLabel = (
  momentLabel: string,
  direction: 'label' | 'emoji' = 'label'
): string | undefined => {
  if (direction === 'emoji') {
    return (
      Moment.MomentLabels[momentLabel as Moment.Moment] +
      ' ' +
      Moment.MomentEmojis[momentLabel as Moment.Moment]
    ); 
  } else {
    return (
      Moment.MomentEmojis[momentLabel as Moment.Moment] +
      ' ' +
      Moment.MomentLabels[momentLabel as Moment.Moment]
    );
  }
};
