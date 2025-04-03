import { CountryPercentageItem } from "./types";

export const TotalPercentageDisplay = ({ data }: { data: CountryPercentageItem[] }) => {
    const totalPercentage = data.reduce((sum: number, item: CountryPercentageItem) => sum + (item.percent || 0), 0);
    return (
        <div className="text-sm font-medium mt-2">
            Total: {totalPercentage.toFixed(1)}%
            <span className={totalPercentage !== 100 ? 'text-red-500' : 'text-green-600'}>
                {totalPercentage !== 100 ? ' (Should total 100%)' : ' (Valid)'}
            </span>
        </div>
    );
}

export default TotalPercentageDisplay;