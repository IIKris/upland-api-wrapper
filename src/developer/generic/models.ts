export interface ICity {
    id: number;
    name: string;
    stateName: string;
    countryName: string;
}

export interface ICityShort {
    id: number;
    name: string;
}

export interface INeighborhood {
    id: number;
    name: string;
    cityId: number;
    area: number;
    boundaries: Array<Array<Array<number>>>;
    center: Array<number>;
}

export interface INeighborhoodShort {
    id: number;
    name: string;
}

export interface IProperty {
    id: number;
    address: string;
    city: ICityShort;
    neighborhood: INeighborhoodShort;
    status: string;
}

export interface IProperties {
    currentPage: number;
    pageSize: number;
    totalResults: number;
    results: IProperty[];
}

export interface ICollection {
    id: number;
    name: string;
    amount: number;
    rarityLevel: number;
    description: string;
    requirements: string;
    yieldBoost: number;
    oneTimeReward: number;
    image: string;
    imageThumbnail: string;
    cityId?: number;
}

export interface ITreasure {
    userName: string;
    reward: number;
    lockedAt: string;
    spawnAt: string;
    fullAddress: string;
    treasureType: string;
}

export interface ITreasureHistory {
    results: ITreasure[];
    currentPage: number;
    pageSize: number;
    totalResults: number;
}

export interface IBuilding {
    id: number;
    propertyId: string;
    name: string;
    model_id: number;
    model: string
    lat: string;
    lng: string;
    rotate: Array<number>;
    scale: number;
    altitude: number;
    meshes: object;
}

export interface IBuildings {
    buildings: IBuilding[];
}

export interface ITrack {
    id: number;
    name: string;
    city: ICityShort;
    thumbnail: string;
    distance: number;
    surface: string;
    weather: string;
    laps: number;
    allowedVehicleClasses: string;
    path: Array<Array<number>>;
    center: Array<number>;
    boundaries: Array<Array<Array<number>>>;
}

export interface ITrackShort {
    id: number;
    name: string;
    city: ICityShort;
    thumbnail: string;
    distance: number;
    surface: string;
    weather: string;
    laps: number;
    allowedVehicleClasses: string;
    path?: Array<Array<number>>;
}

export interface ITracks {
    tracks: ITrackShort[];
}

export interface IDevShop {
    id: number;
    name: string;
    appUrl: string;
    description: string;
    location: IDevShopLocation;
}

export interface IDevShopLocation {
    id: number;
    address: string;
    city: ICityShort;
    neighborhood: INeighborhoodShort;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

export interface GetTracksOptions {
    /**
     * The city to filter the tracks by.
     */
    cityName?: string;

    /**
     * Whether or not to include the path of the track.
     */
    includePath?: boolean;
}

export interface GetPropertiesOptions {
    /**
     * Current page number.
     * @defaultValue 1
     */
    currentPage?: number;

    /**
     * Page size between 10 and 100.
     * @defaultValue 100
     * @minimum 10
     * @maximum 100
     */
    pageSize?: number;

    /**
     * The city ID to filter the properties by.
     * @defaultValue 1
     */
    cityId?: number;

    /**
     * Text for property address search.
     * @defaultValue ''
     */
    textSearch?: string;
}

export interface GetNeighborhoodsOptions {
    /**
     * City ID to filter the neighborhoods by.
     * @defaultValue 0 --> all cities
     */
    cityId?: number;

    /**
     * Text for neighborhood name search.
     * @defaultValue ''
     */
    textSearch?: string;
}

export interface GetTreasureHistoryOptions {
    /**
     * Current page number.
     * @defaultValue 1
     */
    currentPage?: number;

    /**
     * Page size between 10 and 100.
     * @defaultValue 100
     * @minimum 10
     * @maximum 100
     */
    pageSize?: number;

    /**
     * City ID to filter the treasure history by.
     * @defaultValue 0 --> all cities
     */
    cityId?: number;
}