import { render } from '@testing-library/react';
import WeatherWidget from '../components/WeatherWidget';

describe('WeatherWidget', () => {
    it('renders without errors', () => {
        render(<WeatherWidget />);
    });

    it('displays weather information correctly', () => {
        const { getByText, getByAltText } = render(<WeatherWidget />);

        // Checking city name
        expect(getByText('Melbourne')).toBeInTheDocument();

        // Checking temperature
        expect(getByText('32')).toBeInTheDocument();

        // Checking humidity
        expect(getByText('Humidity')).toBeInTheDocument();
        expect(getByText('78%')).toBeInTheDocument();

        // Checking chance of rain
        expect(getByText('Chance oF Rain')).toBeInTheDocument();
        expect(getByText('34%')).toBeInTheDocument();

        // Checking wind
        expect(getByText('Wind')).toBeInTheDocument();

        // Checking tomorrow's weather
        expect(getByText('Tomorrow')).toBeInTheDocument();
        expect(getByText('30')).toBeInTheDocument();

        // Checking icon
        expect(getByAltText('No icon available')).toBeInTheDocument();
    });
});
