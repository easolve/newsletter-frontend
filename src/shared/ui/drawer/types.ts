export interface NewsletterDrawerProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  isLoading?: boolean;
  title: string;
  content: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onSave?: () => void;
  onSend?: () => void;
  onRegenerate?: () => void;
}
