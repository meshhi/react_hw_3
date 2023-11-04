import ListingItem from "./ListingItem/ListingItem";

export interface ICatalogItem {
    id: number, 
    url: string,
    mainImage?: string,
    title: string,
    currencyCode: string,
    price: number | string,
    quantity: number,
};

interface ICatalogProps {
    items: ICatalogItem[];
}

export default function Listing({items} : ICatalogProps) {
  return (
    <div style={{
        width: "100%", 
        padding: "0 3rem", 
        columnCount: "5"
        }}>
        {items.map((item) => <ListingItem key={item.id} item={item} />)}
    </div>
  )
}
