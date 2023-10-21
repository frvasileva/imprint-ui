import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Groceries ', 'Shopping', 'Transport', 'Travel', 'Health', 'Utilities', 'Services', 'Inestment'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 10, 20],
            backgroundColor: [
                '#9cb544',
                '#ffa300',
                '#9e51c5',
                '#d23558',
                '#01cadc',
                '#af7d7d',
                '#9e51c5',
                '#00abbd',
            ],

            borderWidth: 0,
        },
    ],
};

export function DataByCateogryDonutWidget() {
    return (
        <div className="footprint-by-cateogry donut-wrapper">
            <p className='section-title'>CO2 Footprint by category:</p>
            <div className="donut-chart-wrapper">
                <span className='total-co2-amount'>90kg</span>
                <Doughnut data={data} />
            </div>

        </div>


    );
}
