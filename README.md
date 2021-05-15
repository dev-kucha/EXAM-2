

******************************************************************************************************
Текст докладу:

Доброго дня пані та панове.

Пропоную вашій увазі екзаменаційну роботу на тему "Простий сайт з JS" - прототип сайту monticello


І. Детальніше про зовнішній вигляд:

Оскільки екзамен, все ж-таки, по JS, я вирішив зекономити трохи дорогоцінного часу и не загострювати увагу на ілюстраціях.
- по-перше, я планую врешті доробити цей макет до адаптивності швидкості завантаження, а це потребує трохи більш детального підходу до вставки ілюстрацій, що вимагає трохи більше часу. Тому й не хотілося вставляти їх аби як.
- по-друге, без ілюстрацій краще видно структуру і геометрію макету, ніщо не відволікає погляд від головного.


ІІ. Детальніше про технології
Я виконав майже всі вимоги ТЗ окрім застосування робочої карти Google і адаптивності які Рос лубʼязно дозволив не виконувати. :-)
Ховер і фокус ефекти, плавна прокрутка, меню, вертикальний і горизонтальний слайдери, тощо. Для генерації повного комплекта фавіконів на цей раз я застосував онлайн генератор https://realfavicongenerator.net/.

У роботі я застосував препроцессор SASS у синтаксисі scss. 
Компілював у CSS засобами Live Sass Compiler - Extention для VDCode.

Розкладку плиток у блоці Gallery я зробив викорстовуючи Grig-layot. Трохи підчитав - дуже сподобались можливості. У разі різнорозмірних блоків у grid набагато більше можливостей у порівнянні з flex. Хоча б тому, що непотрібно створювати додатковий блок-обгортку тобто ділити весь блок на ще 2 окремі стовпчики.

В роботі активно використовував git. Спочатку я зробив "заготовку" під горизонтальний слайдер, але коли почав інтегрувати сторонній скрипт, зтікнувся з деякими несумісностями і багато чого прийшлось доробляти/переробляти. Для всіх доробок я створив окрему гілку git (навіть 2) і тільки після того, як підшаманив, змерджив доопрацювання в основну гілку. Не стомлююсь висловлювати свій захват від git.


ІІI. 
Детальніше про функціонал, що забезпечує JS:

1. Плашка з верхнім меню змінює бекграунд як тільки покидає межі хедера

2. Звичайне меню з індикаторами позиції реалізовано стандартними засобами. Штатну поведінку лінків у пунктах меню вімкнено і навігація здійснюється за допомогою js-метода scrollIntoView з плавною прокруткою smooth.

3. Таку ж плавну прокрутку до наступного блока забезпечую клік на стрілці "вниз" у хедері

4. Бульбашки поруч з пунктами меню "слухають" позицію відповідного блоку відносно вікна і реагують коли блок перетинає смугу 90% висоти вікна. Таким чином, не важливо як саме здійснювалась навігація - скролом чи через меню - бульбашки реагують адекватно.

5. Вертикальний слайдер у хедері - повністю кастомний на чистому js. Кожен слайд займає повну висоту і ширину вьюпорта, і має чудово адаптуватись під різні розміри вікна - але це поки що розглядаємо як "заділ" на майбутню роботу по доданню в макет респонсіву. Також кожен слайд має свій текст і бекграунд, що відповідає ТЗ. 

6. У якості горизонтального слайдера новин я використав готове рішення - чудовий сучасний слайдер ChiefSlider (https://itchief.ru/), що реалізований на чистому js (розмір кода 9 Кбайт) і не потребує сторонніх бібліотек. Він "з коробки" пропонує дуже багато різноманітних налаштувань:
- кількість слайдів, що одночасно демоструються
- циклічну зміну слайдів
- індикатор зміни слайдів з можливістю його застосування для навігації
- автоматична зміна слайдів
- адаптивність (респонсів) і підтримка свайпів для пристроїв з сенсорними екранами. Таким чином, це ще один аргумент для вдосконалення макету до адаптивності.

На мою думку, мені вдалося досить органічно імплементувати цій слайдер у свій макет.


Висновки.

Мені дуже сподобався макет і я планую згодом повернутися до його доопрацювання - додати ілюстрації, респонсів, живу Google-карту, кнопку-стрілку "нагору", що зʼявлятиметься при скролі.
Можливо, згодом зʼявляться ще декякі ідеї. Хочу доопрацювати і покласти цей макет до свого портфоліо.


******************************************************************************************************
Требования по макету - ТЗ:
1. :hover, :focus эффекты на ваше усмотрение
2. При клике в меню реализовать плавную прокрутку к соответствующей секции
3. При клике на иконку со стрелкой в первой секции плавная прокрутка к PROJECTS
4. HEADER и NEWS: слайдеры
a. HEADER: картинка и текст являются одним слайдом
b. NEWS: каждая новость это слайд, листается по одной новости. Сделать автоматическое листание с задержкой в 4 секунды.
5. Карта рабочая с кастомной иконкой
a. Стиль карты можно взять здесь https://mapstyle.withgoogle.com/ 
Критерии - Баллы:
1. Верстка - законченность секций (всего 5 баллов)
1 балл - HEADER
1 балл - PROJECTS
1 балл - NEWS
1 балл - GALLERY
1 балл - CONTACT + FOOTER
2. JS (всего 4 балла)
1 балл - HEADER Cлайдер
1 балл - NEWS Слайдер
1 балл - Карта
1 балл - Плавная прокрутка навигации и кнопок к секциям 
Требования:
1. Проект называем monticello
2. Валидность HTML/CSS
3. Семантичность верстки
4. Соответствие макету (используем pixel perfect) 
Использование шрифта как в макете
Шрифты подключаем через Google Fonts и @font-face
5. Кроссбраузерность Chrome, Firefox, Opera, IE11++
6. Все интерактивные элементы должны иметь :hover, :focus стили
7. Наличие favicon
8. Использование препроцессора
9. Использовании БЭМ
10. Использование SVG где возможно