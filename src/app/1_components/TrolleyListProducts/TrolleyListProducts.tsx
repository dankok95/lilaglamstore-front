// import { useState } from "react";
// import { FaRegHeart } from "react-icons/fa";

// import { useTrolleyContext } from "@/app/context/trolley";

// import * as S from "./TrolleyListProducts.styled";

// const emptyCartMessage = "Twój koszyk jest pusty";
// const quantityLabel = "Ilość:";
// const price = "Cena:";
// const currencySymbol = "zł";
// const addToFavorites = "Dodaj do ulubionych";
// const removeFromTrolley = "Usuń";
// const color = "Kolor:";
// const size = "Rozmiar:";

// type Props = {
//   type: "drawer" | "cartPage";
//   shouldDisplayActionBox?: boolean;
// };

// const TrolleyListProducts = ({
//   type,
//   shouldDisplayActionBox = true,
// }: Props) => {
//   const { trolley, setTrolley } = useTrolleyContext();
//   const [isFavorite, setIsFavorite] = useState<string[]>([]);

//   const handleFavoriteClick = (id: string) => {
//     const isCurrentlyFavorite = isFavorite.includes(id);
//     if (isCurrentlyFavorite) {
//       setIsFavorite(isFavorite.filter((itemId) => itemId !== id));
//     } else {
//       setIsFavorite([...isFavorite, id]);
//     }
//   };

//   const isDrawer = type === "drawer";

//   const removeProduct = (id: string) => {
//     const existingItemIndex = trolley?.items.findIndex(
//       (productItem) => productItem.product._id === id
//     );

//     if (
//       existingItemIndex !== -1 &&
//       trolley &&
//       existingItemIndex !== undefined
//     ) {
//       const newItems = [...trolley.items];
//       newItems[existingItemIndex].quantity -= 1;
//       if (newItems[existingItemIndex].quantity === 0) {
//         newItems.splice(existingItemIndex, 1);
//       }

//       const photos = trolley?.photos || [];

//       setTrolley({ items: newItems, photos });
//     }
//   };

//   if (trolley?.items.length) {
//     return trolley.items.map((item, index) => {
//       return (
//         <S.Container $isDrawer={isDrawer}>
//           {!isDrawer && (
//             <S.BoxCartPageImg>
//               <S.ProductImage
//                 src={item?.product?.photos[0]}
//                 width={100}
//                 height={100}
//                 alt={item?.product?.name}
//               />
//             </S.BoxCartPageImg>
//           )}
//           <S.ProductMainInfo>
//             {!isDrawer && (
//               <S.ProductTitle>{item?.product?.name}</S.ProductTitle>
//             )}
//             <S.ProductWrapper key={index} $isDrawer={isDrawer}>
//               {isDrawer && (
//                 <S.ProductImage
//                   src={item?.product?.photos[0]}
//                   width={100}
//                   height={100}
//                   alt={item?.product?.name}
//                 />
//               )}
//               <S.ProductInfo $isDrawer={isDrawer}>
//                 {isDrawer && (
//                   <S.ProductTitle>{item?.product?.name}</S.ProductTitle>
//                 )}
//                 <S.ProductQuantity>
//                   {`${quantityLabel} ${item.quantity}`}
//                 </S.ProductQuantity>
//                 <S.ProductQuantity>
//                   {`${color} ${item?.color}`}
//                 </S.ProductQuantity>
//                 <S.ProductQuantity>
//                   {`${size} ${item?.size.toUpperCase()}`}
//                 </S.ProductQuantity>
//               </S.ProductInfo>
//               <S.PriceBox>
//                 <S.ProductPrice $isDrawer={isDrawer}>
//                   {`${item?.product.price * item?.quantity} ${currencySymbol}`}
//                 </S.ProductPrice>
//               </S.PriceBox>
//               {isDrawer && (
//                 <S.ActionBox $isDrawer={isDrawer}>
//                   <S.DeleteBox onClick={() => removeProduct(item.product?._id)}>
//                     <S.DeleteIcon />
//                   </S.DeleteBox>
//                   <S.AddToFavoritesBox
//                     onClick={() => handleFavoriteClick(item?.product?._id)}
//                   >
//                     <FaRegHeart
//                       key={index}
//                       size={20}
//                       color={
//                         isFavorite.includes(item?.product?._id)
//                           ? "#d9000c"
//                           : "black"
//                       }
//                     />
//                   </S.AddToFavoritesBox>
//                 </S.ActionBox>
//               )}
//             </S.ProductWrapper>
//             {!isDrawer && shouldDisplayActionBox && (
//               <S.ActionBox $isDrawer={isDrawer}>
//                 <S.DeleteBox onClick={() => removeProduct(item.product?._id)}>
//                   <S.DeleteIcon />
//                   <S.ActionCopy>{removeFromTrolley}</S.ActionCopy>
//                 </S.DeleteBox>
//                 <S.AddToFavoritesBox
//                   onClick={() => handleFavoriteClick(item?.product?._id)}
//                 >
//                   <FaRegHeart
//                     key={index}
//                     size={20}
//                     color={
//                       isFavorite.includes(item?.product?._id)
//                         ? "#d9000c"
//                         : "black"
//                     }
//                   />
//                   <S.ActionCopy>{addToFavorites}</S.ActionCopy>
//                 </S.AddToFavoritesBox>
//               </S.ActionBox>
//             )}
//           </S.ProductMainInfo>
//         </S.Container>
//       );
//     });
//   } else {
//     return <S.EmptyTrolley>{emptyCartMessage}</S.EmptyTrolley>;
//   }
// };

// export default TrolleyListProducts;
