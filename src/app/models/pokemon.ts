interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number

}

interface Move {
    move: {
        name: string;
        url: string;
    }
}

interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: any;
    game_indices: any;
    height: number;
    held_items: any;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any;
    species: any;
    sprites: Sprites;
    stats: any;
    types: Type[];
    weight: number;
}