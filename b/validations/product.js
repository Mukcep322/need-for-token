import {body} from "express-validator"

export const ProductValid = [
  body("title", "Имя обязательно").notEmpty(),
  body("startPrice", "Цена обязательна").notEmpty(),
  body("imageUrl", "Неверная ссылка на изображение").isURL(),
  body("description", "Описание обязательно").notEmpty()
]

export const countProductValid = [
  body("count", "Количество обязательно").notEmpty().isNumeric()
]
