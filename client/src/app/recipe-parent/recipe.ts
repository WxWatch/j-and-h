export interface Recipe {
    name: string;
    imageUrl: string;
    rating: number;
    note: string;
    state?: RecipeState;
}

export type RecipeState = 'wishlist' | 'completed';
