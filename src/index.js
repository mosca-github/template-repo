/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
 */
function isAllTrue(array, fn) {

	let tmpArg_1 = 0;
	let tmpArg_2 = 0;

	if (array == 0 || array.length <= 0) {
		try { throw new Error("empty array"); }
		catch (error) { console.log(error.message); }
	} else if (typeof fn != 'function') {
		try { throw new Error("fn is not a function"); }
		catch (error) { console.log(error.message); }
	} else {
		for (let i = 0; i < array.length; i++) {
			(fn(array[i]) == false) ? tmpArg_1++ : tmpArg_2++;
			if (array.length == tmpArg_1) { return false; }
			else if (tmpArg_2 > 0) { return true; }
		}
	}
}

/*
 Задание 2:

 2.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
	let tmpArg = 0;

	if (array == 0 || array.length <= 0) {
		try { throw new Error("empty array"); }
		catch (error) { console.log(error.message); }
	}

	else if (typeof fn != 'function') {
		try { throw new Error("fn is not a function"); }
		catch (error) { console.log(error.message); }
	}

	for (let i = 0; i < array.length; i++) {
		if (fn(array[i]) == false) { tmpArg++; }
		return (tmpArg >= 1) ? true : false;
	}
}

/*
 Задание 3:

 3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
	let newArr = [];
	let templateArg = '';

	if (typeof fn != 'function') { 
		try { 
			throw new Error('fn is not a function'); 
		} catch (error) { 
			console.log(error.message); 
		} 
	}

	for (let i = 1; i < arguments.length; i++) {
		try { 
			templateArg = fn(arguments[i]); 
		}
		catch (error) { 
			newArr.push(arguments[i]) 
		}
	}
	return newArr; 
}

/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {

	//Необходимо выбрасывать исключение в случаях: - number не является числом
	if (!isFinite(number)) {
		try { throw new Error('number is not a number'); }
		catch (error) { console.log(error.message); }
	}
	//Функция должна вернуть объект, у которого должно быть несколько методов:
	let obj = {
		sum: () => {
			for (let i = 0; i < arguments.length; i++) {
				//Необходимо выбрасывать исключение в случаях: - какой-либо из аргументов div является нулем
				if (arguments[i] == 0) { 
					try { throw new Error('division by 0'); } catch (error) { console.log(error.message);}}
				number += arguments[i];
				return number;
			}
		},
		dif: () => {
			for (let i = 0; i < arguments.length; i++) {
				//Необходимо выбрасывать исключение в случаях: - какой-либо из аргументов div является нулем
				if (arguments[i] == 0) { try { throw new Error('division by 0'); } catch (error) { console.log(error.message);}}
				number -= arguments[i];
				return number;
			}
		},
		div: () => {
			for (let i = 0; i < arguments.length; i++) {
				//Необходимо выбрасывать исключение в случаях: - какой-либо из аргументов div является нулем
				if (arguments[i] == 0) { try { throw new Error('division by 0'); } catch (error) { console.log(error.message);}}
				number /= arguments[i];
				return number;
			}
		},
		mul: () => {
			for (let i = 0; i < arguments.length; i++) {
				//Необходимо выбрасывать исключение в случаях: - какой-либо из аргументов div является нулем
				if (arguments[i] == 0) { try { throw new Error('division by 0'); } catch (error) { console.log(error.message);}}
				number *= arguments[i];
				return number;
			}
		},
	}
	//Функция должна вернуть объект
	return obj;
}

/* При решении задач, пострайтесь использовать отладчик */

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
