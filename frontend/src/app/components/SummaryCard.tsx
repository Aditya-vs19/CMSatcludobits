interface SummaryCardProps {
  title: string;
  value: number;
  color: 'blue' | 'gray' | 'green' | 'orange';
}

export function SummaryCard({ title, value, color }: SummaryCardProps) {
  const colorClasses = {
    blue: 'bg-[#007AFF]/10 text-[#007AFF]',
    gray: 'bg-gray-100 text-gray-700',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="text-gray-600 mb-2">{title}</div>
      <div className={`inline-flex items-center justify-center px-4 py-2 rounded-lg ${colorClasses[color]}`}>
        <span className="text-3xl">{value}</span>
      </div>
    </div>
  );
}
