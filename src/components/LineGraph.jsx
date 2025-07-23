import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';



export default function LineGraph() {


    const data = [
        { month: 'Jan', expense: 80 },
        { month: 'Feb', expense: 120 },
        { month: 'Mar', expense: 90 },
        { month: 'Apr', expense: 140 },
        { month: 'May', expense: 110 },
        { month: 'Jun', expense: 100 },
        { month: 'Jul', expense: 70 },
    ];



    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Expenses Tracker</h2>
            <ResponsiveContainer width={400} height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="expense" fill="#2a57ff" radius={[8, 8, 0, 0]} barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
