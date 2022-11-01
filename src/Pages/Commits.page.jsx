import { Line } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { useGetRequest } from '../hooks/requestMethods';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Weight Loss',
        },
    },
};
export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sooking',
        },
    },
};


const CommitsPage = () => {
    const { user } = useAuthContext();
    const { data: serverData, getData } = useGetRequest()



    useEffect(() => {
        if (!serverData) {
            getData('/api/commit/', user.token)
        }
    }, [getData, user, serverData])


    return (
        <div className="mt-32">
            <div className="lg:w-9/12 m-auto space-y-6 px-4">
                {serverData && <Line options={options} data={{
                    labels: Array.from({ length: serverData.filter(i => i.commit_type === 'weight_loss').map(i => i.bmi * 1).length }, (_, i) => i + 1),
                    datasets: [
                        {
                            fill: true,
                            label: 'BMI',
                            data: serverData.filter(i => i.commit_type === 'weight_loss').map(i => i.bmi * 1),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                }

                } />}

                {serverData && <Line options={options2} data={{
                    labels: Array.from({ length: serverData.filter(i => i.commit_type === 'smoke').map(i => i.numOfSmoke * 1).length }, (_, i) => i + 1),
                    datasets: [
                        {
                            fill: true,
                            label: 'Smoking',
                            data: serverData.filter(i => i.commit_type === 'smoke').map(i => i.numOfSmoke * 1),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                }

                } />}
            </div>
        </div>
    )
}

export default CommitsPage