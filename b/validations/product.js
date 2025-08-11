import {body} from "express-validator"

export const createProductAuth = [
  body("title", "Имя обязательно").notEmpty(),
  body("startPrice", "Цена обязательна").notEmpty(),
  body("imageUrl", "Неверная ссылка на изображение").isURL(),
  body("description", "Описание обязательно").notEmpty()
]
