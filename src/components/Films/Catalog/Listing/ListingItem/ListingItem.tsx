import React from 'react'
import { ICatalogItem } from '../Listing'
interface IListingItemProps {
    item: ICatalogItem;
}

enum Currency {
    usd = '$',
    rub = 'RUB'
}

export default function ListingItem({ item }: IListingItemProps) {
    return (
        <div className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                        <img src={item.mainImage}></img>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">{item.currencyCode === 'USD' ? '$' : item.currencyCode}{item.price}</p>
                    <p className="item-quantity level-medium">{item.quantity} left</p>
                </div>
            </div>
        </div>
    )
}
