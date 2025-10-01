export type CTAButton = {
  label: string;
  icon?: string;
  severity: CTAButtonSeverity;
  disabled?: boolean;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  action: () => void;
};
export type CTAButtonSeverity =
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'
  | 'help'
  | 'primary'
  | 'secondary'
  | 'contrast'
  | null
  | undefined;
