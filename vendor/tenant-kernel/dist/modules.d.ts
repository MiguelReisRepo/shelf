import type { LocalizedString } from './types.js';
export interface Service {
    id: string;
    name: LocalizedString;
    price: number;
    durationMin: number;
    description?: LocalizedString;
}
/** Override de preço (e, opcionalmente, duração) para combos de serviços. */
export interface ServiceCombo {
    services: string[];
    price: number;
    /** Duração real do combo; se omitida, soma as durações dos membros. */
    durationMin?: number;
}
export interface Location {
    id: string;
    name: string;
    timezone?: string;
}
/** { [locationId]: { [weekday 0-6]: [ ["09:00","13:00"], ["14:00","19:00"] ] } } */
export interface WorkingHours {
    [locationId: string]: {
        [weekday: number]: [string, string][];
    };
}
export interface BookingModule {
    services: Service[];
    combos: ServiceCombo[];
    locations: Location[];
    hours: WorkingHours;
    policies: {
        cancellationHours: number;
        loyaltyEveryN?: number;
        paymentMethods: string[];
    };
}
export interface ProductVariant {
    name: string;
    values: string[];
}
export interface Product {
    id: string;
    title: LocalizedString;
    price: number;
    categories: string[];
    images: string[];
    variants: ProductVariant[];
    description: LocalizedString;
    flags?: {
        isNew?: boolean;
        isFeatured?: boolean;
        isClearance?: boolean;
    };
}
export interface CatalogModule {
    checkout: {
        kind: 'whatsapp' | 'email' | 'stripe';
        ctaLabel?: LocalizedString;
    };
    products: Product[];
    categories: string[];
}
