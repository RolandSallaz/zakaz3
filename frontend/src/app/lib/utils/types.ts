export interface ICard {
    id: number;
    documentId: number;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    registration_without_power: boolean;
    binding_to_rf_number: boolean;
    list: string[];
    card_types: string[];
    tags: {
        tag: string[]
    }
}

export interface ISmallCard {
    id: number;
    title: string;
    description: string;
    price: number;
    info: string;
    upd: string;
}