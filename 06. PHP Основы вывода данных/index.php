<?php

// обявляю переменную и присваиваю в нее значение
$age = 24;
$first_name = 'Анна';

// выводим информацию в документ
echo "Привет, меня зовут $first_name, мой возраст $age года.";

// данные для подключения к бд
// Имя: f0727777_test_db
// Пользователь: f0727777_super_admin
// Пароль: 2342345345634563456
// Адрес хоста: localhost


// переменные для подключения к БД
$dsn = 'mysql:dbname=f0727777_my_first_db;host=localhost';
$user = 'f0727777_admin';
$password = '123456789';

// создаем подключение к БД
$pdo = new PDO($dsn, $user, $password);

// тестируем вывод подключения к БД
var_dump($pdo);
?>



<?php

// переменные для подключения к БД
$dsn = 'mysql:dbname=f0727777_my_first_db;host=localhost';
$user = 'f0727777_admin';
$password = '123456789';

// создаем подключение к БД
$pdo = new PDO($dsn, $user, $password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);

// тестируем вывод подключения к БД
// var_dump($pdo);

// пишем текст запроса к БД
$sql = 'SELECT NAME 
            FROM salesreps
            WHERE EMPL_NUM = 108;';

// выполняем запрос к БД
$result = $pdo->query($sql)->fetch();

// смотрим, что получили из БД
//var_dump($result);

echo "Имя сотрудника: $result[NAME]";

?> 

<?php

// переменные для подключения к БД
$dsn = 'mysql:dbname=f0727777_my_first_db;host=localhost';
$user = 'f0727777_admin';
$password = '123456789';

// создаем подключение к БД
$pdo = new PDO($dsn, $user, $password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);

// тестируем вывод подключения к БД
// var_dump($pdo);

// пишем текст запроса к БД
$sql = 'SELECT NAME, AGE 
            FROM salesreps
            WHERE EMPL_NUM = 103;';

// выполняем запрос к БД
$result = $pdo->query($sql)->fetch();

// смотрим, что получили из БД
//var_dump($result);

echo "Имя сотрудника: $result[NAME], возраст: $result[AGE].";


?> 