export interface IGameHttpIn {
    title: string;
    description?: string;
    playerMinimum?: number;
    playerMaximum?: number;
    duration?: number; // in minutes
    rating?: number;
    imageUrl?: string;
}
