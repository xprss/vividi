export type CTAButton = {
  label: string;
  icon?: string;
  severity: CTAButtonSeverity;
  disabled?: boolean;
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
