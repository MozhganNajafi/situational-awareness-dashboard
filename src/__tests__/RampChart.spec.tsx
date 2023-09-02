import { render, waitFor, screen, act, renderHook } from '@testing-library/react';
import RampChart from '../components/charts/RampChart';
import { getRampAlgorithms } from '../api/ramp';
import { useEffect } from 'react';

jest.mock('../api/ramp', () => ({
    getRampAlgorithms: jest.fn((onUpdate) => {
        const mockRamps = [
            { id: 'ramp-1', algorithm: 'Algorithm 1' },
            { id: 'ramp-2', algorithm: 'Algorithm 2' },
            { id: 'ramp-3', algorithm: 'Algorithm 2' },
            { id: 'ramp-4', algorithm: 'Algorithm 3' },
            { id: 'ramp-5', algorithm: 'Algorithm 1' },
            { id: 'ramp-6', algorithm: 'Algorithm 5' },
            { id: 'ramp-7', algorithm: 'Algorithm 4' },
            { id: 'ramp-8', algorithm: 'Algorithm 5' },
            { id: 'ramp-9', algorithm: 'Algorithm 5' },
            { id: 'ramp-10', algorithm: 'Algorithm 3' },
            { id: 'ramp-11', algorithm: 'Algorithm 4' },
            { id: 'ramp-12', algorithm: 'Algorithm 5' },
            { id: 'ramp-13', algorithm: 'Algorithm 5' },
            { id: 'ramp-14', algorithm: 'Algorithm 1' },
            { id: 'ramp-15', algorithm: 'Algorithm 3' },
        ];
        onUpdate(mockRamps);
    }),
}));

describe('RampChart', () => {
    beforeAll(() => {
        jest.resetAllMocks();
    });

    it('renders without errors', () => {
        render(<RampChart />);
    });

    it('displays chart data', async () => {
        render(<RampChart />);
        await waitFor(() => {
            expect(screen.getByRole('img')).toBeInTheDocument();
        });
    });

    it('getRampAlgorithms is called when values dependency changes', async () => {
        render(<RampChart />);
        await waitFor(() => { });

        const { rerender } = renderHook(
            ({ values }) => useEffect(() => { getRampAlgorithms }, [values]),
            { initialProps: { values: [3, 2, 3, 2, 5] } }
        );
        expect(getRampAlgorithms).toBeCalledTimes(1);

        rerender({ values: [5, 6, 4, 2, 3] });
        expect(getRampAlgorithms).toBeCalled();
    });

    it('calls getRampAlgorithms when enough time has passed', async () => {
        const tick = () => new Promise(() => getRampAlgorithms);
        render(<RampChart />);
        await waitFor(() => { });

        // Fast-forward time to simulate waiting for 500ms
        act(async () => {
            jest.advanceTimersByTime(500) && (await tick());
        });
        expect(getRampAlgorithms).toHaveBeenCalled();
    });

    it('does not call getRampAlgorithms if not enough time has passed', async () => {
        render(<RampChart />);
        await waitFor(() => { });

        // Simulate waiting for less than 500ms
        act(() => {
            jest.advanceTimersByTime(499);
        });
        expect(getRampAlgorithms).not.toHaveBeenCalled();
    });
});
