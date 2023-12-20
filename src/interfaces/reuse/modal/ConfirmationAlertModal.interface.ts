export interface ConfirmationAlertModalProps {
  isVisible: boolean;
  title: string;
  agreeMessage: string;
  disagreeMessage: string;
  onAgree: () => void;
  onDisagree: () => void;
}
