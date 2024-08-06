import { CartCounter } from "@/app/components/shopping-cart/components/CartCounter";



export const metadata = {
 title: 'Shopping Cart',
 description: 'simple contador',
};


export default function CounterPage() {

  return (
   <div className="flex flex-col items-center justify-center w-full h-full" >
<span> Productos en carrito de compras </span>
<CartCounter value={20}/>

   
   </div>
   
  );
}