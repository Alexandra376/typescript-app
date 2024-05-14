import { WeatherErrorProps } from "./types";
import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./style";

function WeatherError({ error }: WeatherErrorProps) {
  return (
    <WeatherErrorWrapper>
      <ApiError>{`API Error ${error.code}`}</ApiError>
      <ErrorMessage>{error.message}</ErrorMessage>
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
