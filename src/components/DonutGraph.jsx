
import { PieChart, Pie, Cell, } from 'recharts';


export default function DonutGraph() {

    const data = [
        { name: 'Travel', value: 400, color: '#2a57ff' },
        { name: 'Groceries', value: 200, color: '#f5c1c5' },
        { name: 'Food & Drink', value: 300, color: '#ffa032' },
        { name: 'Heal', value: 100, color: '#29aa5d' },
    ];


    return (
        <div className="relative flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Expense Chart</h2>
            <div className="relative">
                <PieChart width={800} height={250}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                    All
                </div>
                {data.map((entry, index) => (
                    <div
                        key={index}
                        className="absolute p-2 bg-white rounded-full shadow-md text-xl"
                        style={{
                            top: `${110 + 80 * Math.sin((Math.PI * 2 * index) / data.length)}px`,
                            left: `${110 + 80 * Math.cos((Math.PI * 2 * index) / data.length)}px`,
                        }}
                    >
                        {entry.icon}
                    </div>
                ))}
            </div>
            <div className="mt-4 space-y-1 text-sm">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                        ></div>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
