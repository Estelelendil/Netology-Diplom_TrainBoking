import React from "react";
import ReviewItem from "./Items/ReviewItem";
import Progress from "./Items/Progress";

export default function ReviewsPage() {
  return (
    <div className="h-[738px] bg-white flex flex-col gap-[60px] pl-[252px]">
      <h1 className="text-36 uppercase mt-[120px]">Oтзывы</h1>
      <div className="flex w-full self-center justify-center items-center gap-[100px] mx-auto">
        <ReviewItem
          photo="photo1"
          name="Екатерина Вальнова

        "
          review="Доброжелательные подсказки
        на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
        />
        <ReviewItem
          photo="photo2"
          name="Евгений Стрыкало"
          review="
        СМС-сопровождение до посадки
        Сразу после оплаты ж/д билетов 
        и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
        />
      </div>
      <div className="flex w-full self-center justify-center items-center gap-[100px] mx-auto">
        <Progress active={1} amount={5} />
      </div>
    </div>
  );
}
