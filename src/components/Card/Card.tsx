import { Card, CardContent, CardFooter } from '../ui/card';
import { Link } from 'react-router-dom';
// import Image from 'next/image';

import { Item } from '../../types/item';
import { Button } from '../ui/button'
import "./Card.css" 

interface ItemCard {
    data: Item;
}

const ItemCard: React.FC<ItemCard> = ({data}) => {
    return (
        <Link to="/"
        className="outline-0 ring-primary transition duration-300 rounded-lg">
            {/* className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"> */}
            <Card className="rounded-md border-2 item-card">
                {/* <CardContent className="pt-4"> */}
                    <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
                        <img
                        src={data.images?.[0]}
                        alt=""
                        // fill
                        // className='aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-105'
                        className='aspect-square rounded-md object-cover transition-all duration-300'/>
                    </div>
                    
                    <div className= "item-card-body flex">
                    <div className = 'flex-col text-center content-center py-6'>
                        <p className="text-lg sm:text-lg md:text-xl font-semibold text-center">{data.name}</p>
                        {/* <p className="text-sm text-primary">{data.category}</p>
                        <p className="text-sm text-secondary">{data?.price}</p> */}
                    </div>
                    <Button variant='secondary'
                    className='bg-blue-300'>
                        Read More
                    </Button>
                    </div>
                    
                {/* </CardContent> */}
            </Card>
        </Link>
    )
}

export default ItemCard;