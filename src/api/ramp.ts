import throttle from 'lodash/throttle';

export type rampsDetails = {
    id: string;
    algorithm: string;
};

/**
* A mock api to get ramp information
*
* This returns a list of ramps and their current
*  running algorithm, for use in the ramp chart
*/
export const getRampAlgorithms = (onUpdate: any) => {
    const count = 50;

    const throttledUpdate = throttle((ramps: rampsDetails[]) => {
        onUpdate(ramps);
    }, 3000);

    setInterval(() => {
        const ramps: rampsDetails[] = [];
        for (let i = 0; i < count; i++) {
            ramps.push({
                id: `ramp-${i}`,
                algorithm: ["Algorithm 1", "Algorithm 2", "Algorithm 3",
                    "Algorithm 4", "Algorithm 5"][
                    Math.floor(Math.random() * 5)
                ],
            });
        }
        throttledUpdate(ramps);
    }, 500);
}

