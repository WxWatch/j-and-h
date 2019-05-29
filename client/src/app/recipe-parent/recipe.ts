export interface Recipe {
    name: string;
    imageUrl?: string;
    url?: string;
    urlPrettyText?: string;
    ingredients?: string[];
    directions?: string[];
    rating?: number;
    note?: string;
    state?: RecipeState;
    dateAdded: Date;
}

export type RecipeState = 'wishlist' | 'completed';
