export interface Register {
    name: string,
    key: number
}

export interface Device {
    name: string,
    key: number
}

export interface SearchProp {
    phoneNumber? : string,
    beginTime?: string,
    beginTime?: string,
    endTime?: string,
    country?: string,
    method?: string,
    lang? : string,
    device?: string,
    utm_source?: string,
    utm_medium?: string,
    utm_campaign?: string,
    utm_content?: string
}