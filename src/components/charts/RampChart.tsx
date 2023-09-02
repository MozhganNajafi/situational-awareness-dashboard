import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getRampAlgorithms, rampsDetails } from '../../api/ramp';
import { useEffect, useRef, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

let algorithmValues: Array<number> = [];
let algorithmLabels: Array<string> = [];

interface AlgorithmCount {
    [key: string]: number;
}

const RampChart = () => {
    const [values, setValues] = useState(algorithmValues);
    const [labels, setLabels] = useState(algorithmLabels);

    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Ramps',
                data: values,
                backgroundColor: [
                    'rgba(221, 214, 254, 0.2)',
                    'rgba(112,216,209, 0.2)',
                    'rgba(20, 184, 166, 0.2)',
                    'rgba(56, 189, 248, 0.2)',
                    'rgba(176,228,224, 0.2)',
                ],
                borderColor: [
                    'rgba(221, 214, 254, 1)',
                    'rgba(112,216,209, 1)',
                    'rgba(20, 184, 166, 1)',
                    'rgba(56, 189, 248, 1)',
                    'rgba(176,228,224, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const [chartData, setChartData] = useState(data);
    const handleDataChange = (newData: any) => {
        setChartData(newData);
    };

    const lastRan = useRef(Date.now());
    useEffect(() => {
        const handler = setTimeout(() => {
            if (Date.now() - lastRan.current >= 3000) {
                getRampAlgorithms(updateHandler);
                lastRan.current = Date.now();
            }
        }, 3000 - (Date.now() - lastRan.current));

        return () => {
            clearTimeout(handler);
        };
    }, [values]);

    useEffect(() => {
        getRampAlgorithms(updateHandler);
    }, [])

    useEffect(() => {
        handleDataChange(data);
    }, [values]);

    const updateHandler = (ramps: Array<rampsDetails>) => {
        const algorithmCounts: AlgorithmCount = {};
        ramps.forEach(ramp => {
            const algorithm = ramp.algorithm;

            // If the algorithm is encountered for the first time, initialize the count to 1
            if (!algorithmCounts[algorithm]) {
                algorithmCounts[algorithm] = 1;
            } else {
                // Increment the count if the algorithm has been encountered before
                algorithmCounts[algorithm]++;
            }
        });
        setValues(Object.values(algorithmCounts));
        setLabels(Object.keys(algorithmCounts));
    };
    return <Doughnut data={chartData} />;
};

export default RampChart;

