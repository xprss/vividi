export type DialogButton = {
  label: string;
  icon?: string;
  severity: DialogButtonSeverity;
  action: () => void;
};

export type DialogButtonSeverity = 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined;