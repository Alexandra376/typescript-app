export type WeatherMain = {
    temp: number;
    feels_like: number;
}
export interface WeatherInfoProps {
    name: string,
    main: WeatherMain;
    weatherIcon: JSX.Element
    visible: boolean;
}
