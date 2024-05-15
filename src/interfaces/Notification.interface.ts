export interface NotificationItemProps {
    id: number;
    category: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    isRead: boolean;
}
