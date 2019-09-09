let todoList = null;
            let todoForm = null;
            let todoSearch = null;

//moja f date

Date.prototype.formatDate = function (format) {

    /**
     *  Funkcja dodaje zera przed znakami tak, żeby miały określoną długość
     * @method addZero
     * @param {String/Number} variable Zmienna do któej mają zostać dodane zera na jej początku
     * @param {Number} length Długość która zwracany ciąg znakó ma osiągnąć z zerami z przodu
     * @return {String} Ciąg znaków zawierający oryginalną zmienną  na końcu poprzedzona odpowiednią ilością zer (0)
     */

    function addZero(variable, length) {
        var stringVriable = variable.toString(),
            actuallyVriable = '';

        for(var i = 0, max = length - stringVriable.length; i < max; i++) { actuallyVriable += '0'; }
        actuallyVriable += stringVriable;

        return actuallyVriable;
    }

    format = format.replace(/DD/g, addZero(this.getDate(), 2));
    format = format.replace(/MM/g, addZero(this.getMonth() + 1, 2));
    format = format.replace(/YYYY/g, this.getFullYear());
    format = format.replace(/HH/g, addZero(this.getHours(), 2));
    format = format.replace(/mm/g, addZero(this.getMinutes(), 2));
    format = format.replace(/SS/g, addZero(this.getSeconds(), 2));

    return format;
};

var today = new Date();

//console.log(today);
//console.log(today.formatDate('DD.MM.YYYY HH:mm:SS'));

//end moja f date





            function addTask(text) {
                //element todo
                const todo = document.createElement('div');
                todo.classList.add('todo-element');

                //belka gorna
                const todoBar = document.createElement('div');
                todoBar.classList.add('todo-element-bar');

                //data w belce
                const todoDate = document.createElement('div');
                todoDate.classList.add('todo-element-bar');
                //const date = new Date();
                const date = new Date();
                const dateText = date.formatDate('DD.MM.YYYY HH:mm:SS');
                
                //const dateText = date.getDate() + '-0' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: 0' + date.getHours() + ':' + date.getMinutes();
                todoDate.innerText = dateText;

                //przycisk usuwania
                const todoDelete = document.createElement('button');
                todoDelete.classList.add('todo-element-delete');
                todoDelete.classList.add('button');
                todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';

                //wrzucamy elementy do belki
                todoBar.appendChild(todoDate);
                todoBar.appendChild(todoDelete);

                //element z tekstem
                const todoText = document.createElement('div');
                todoText.classList.add('todo-element-text');
                todoText.innerText = text;

                //laczymy calosc
                todo.appendChild(todoBar);
                todo.appendChild(todoText);

                //i wrzucamy do listy
                todoList.append(todo);
            }

            //polyfill dla przeglądarek nie obsługujących closest()
            if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
            if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
                let el = this;
                while (el) {
                    if (el.matches(selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
            };

            document.addEventListener('DOMContentLoaded', function() {
                todoList = document.querySelector('#todoList');
                todoForm = document.querySelector('#todoForm');
                todoSearch = document.querySelector('#todoSearch');

                todoForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const textarea = this.querySelector('textarea');
                    if (textarea.value !== '') {
                        addTask(textarea.value);
                        textarea.value = '';
                    }
                });

                todoSearch.addEventListener('input', function() {
                    const val = this.value;
                    const elems = todoList.querySelectorAll('.todo-element');
                    [].forEach.call(elems, function(el) {
                        const text = el.querySelector('.todo-element-text').innerText;
                        if (text.indexOf(val) !== -1) {
                            //znaleziono text, pokaz
                            el.style.setProperty('display', '');
                        } else {
                            el.style.setProperty('display', 'none');
                        }
                    });
                });

                todoList.addEventListener('click', function(e) {
                    if (e.target.closest('.todo-element-delete') !== null) {
                        e.target.closest('.todo-element').remove();
                    }
                });
            });
