export interface ICard {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    registration_without_power: boolean;
    binding_to_rf_number: boolean;
    list: string[];
    card_types: string[];
    tags: string[]
}

export interface ISmallCard {
    id: number;
    title: string;
    description: string;
    price: number;
    info: string;
    upd: string;
}

export interface IUser {
    id: number | null;
    email: string;
    password: string;
}