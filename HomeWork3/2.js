// Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль. Необходимо у пользователя запросить 
// имя и вызвать функцию greeting, передав туда данное значение.

const username = prompt("Введите имя: ");
function greeting(username){
    return(`Привет, ${username}`);
}
alert (greeting(username));


