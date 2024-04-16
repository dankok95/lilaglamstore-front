import { TCalculateDiscount } from "../types/calculateDiscount";

const calculateDiscountPercentage = ({
  price,
  lowest_price_last_30_days,
}: TCalculateDiscount) => {
  if (
    price &&
    lowest_price_last_30_days &&
    price <= (lowest_price_last_30_days ?? 0)
  ) {
    return 0;
  }

  const discount = ((price - lowest_price_last_30_days!) / price) * 100;

  return Math.round(discount);
};

export default calculateDiscountPercentage;
