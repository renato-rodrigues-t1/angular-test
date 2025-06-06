export interface Movie {
    "title": string,
    "thumbnail": {
        "regular": {
            "small": string,
            "medium": string,
            "large": string
        }
    },
    "year": number,
    "category": string,
    "rating": string,
    "isBookmarked": boolean,
    "isTrending": boolean
}