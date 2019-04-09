export interface Recipe {
    name: string;
    imageUrl?: string;
    url?: string;
    ingredients?: string;
    directions?: string;
    rating?: number;
    note?: string;
    state?: RecipeState;
}

export type RecipeState = 'wishlist' | 'completed';
