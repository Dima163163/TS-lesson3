"use strict";
;
const persons = [
    {
        type: 'user',
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        type: 'user',
        name: 'Иван Иванов',
        age: 23,
        group: 'Семья',
    },
    {
        type: 'user',
        name: 'Макс Максимов',
        age: 29,
        group: 'Друзья',
    },
    {
        type: 'admin',
        name: 'Админ Админов',
        age: 44,
        role: 'Администратор'
    }
];
const logPerson = (person) => {
    let information = undefined;
    if ('role' in person) {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
persons.forEach(logPerson);
