# Sms Confirmation

## Result

![result](https://user-images.githubusercontent.com/93443107/195992720-b4f515f4-3137-475a-b48c-a1df16a8cc9c.gif)

## Up all localy

```bush
cd ./server
npm run start:dev
cd ../client
npm start
```

## Task

Есть вот такой экран с авторизацией через SMS. 

Фронтенд: Можно адаптировать под десктоп сам белый фон. Элементы управления можно взять из скриншота или используя похожие кнопки из свободных источников изображений. Выравнивание всей группы кнопок и полей по центру экрана (какой бы формы не был экран, его размер и положение) В случае открытия на смартфоне (как и в киоске), включается вариант для мобильного устройства с адаптированной под вертикальный экран разметкой/выравниванием (важно сделать подгрузку нужной страницы в зависимости от того десктоп или смартфон, вёрстка может быть одинаковой по сути в конкретном данном случае для упрощения реализации тестовой задачи)
Кнопки должны вводить соответствующие цифры в поле ввода без обновления страницы
Кнопка Стирания должна стирать цифры по одной за одно нажатие
Кнопка Продолжить Должна отправлять код на бэкенд на Точку входа /sms
В случае "правильного" кода поле ввода (фон) должен подсветиться зеленым (после проверки через сервер)
В случае "ошибки" (получаемой от сервера после проверки)  фон поля ввода подсвечиваем красным
Бэкенд:
Должна быть реализована псевдофункция "Обработки присланных кодов".
"Правильный" код может быть жёстко задан в коде функции например 654-321 (в рабочей версии будет подключена функция генерации кодов с параллельной отправкой реальных SMS на телефон пользователя)
На вход в функцию передаём код на проверку, ответ функции true/false

![image](https://user-images.githubusercontent.com/93443107/195992067-4f9d254d-4e55-486b-9f41-cb4293421aab.png)
