export interface Register {
    name: string,
    key: number
}

export interface Device {
    name: string,
    key: number
}


export interface Country {
    countryCode?: string | null ,
    countryName?: string | null
}

export interface SearchProp {
    phoneNumber?: string,
    beginTime?: string,
    endTime?: string,
    country?: string,
    method?: string,
    lang?: string,
    device?: string,
    utm_source?: string,
    utm_medium?: string,
    utm_campaign?: string,
    utm_content?: string
}

export type defaultProps = {
    countryOptions: Array<any>
    registerOptions: Array<any>
    currentLanguagesList: Array<any>
    deviceData: Array<any>;
    propState: SearchProp;
    dataList?: any[],
    dataTotal?: number,
    handleBtnChange: (...args: any[]) => any;
};
