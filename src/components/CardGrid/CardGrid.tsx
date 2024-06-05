import Card from '../Card';
import { Item } from '../../types/item';

interface CardGridProps {
    items: Item[];
}

const CardGrid: React.FC<CardGridProps> = ({items}) => {
    return (
        <div className='space-y-4 w-full max-w-4xl flex justify-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {items.map((item) => (
                    <Card key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}

export default CardGrid;