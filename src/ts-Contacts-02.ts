interface User {
  name: string,
  age: number,
};

interface Admin {
  name: string,
  age: number,
  role: string,
}

interface Person {
  name: string,
  age: number,
  group?: string,
  role?: string,
};

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Иван Иванов',
    age: 23,
    group: 'Семья',
  },
  {
    name: 'Макс Максимов',
    age: 29,
    group: 'Друзья',
  },
  {
    name: 'Админ Админов',
    age: 44,
    role: 'Администратор'
  }
];

const logPerson = (person: Person) => {
  let information: string | undefined = undefined;
  if (person.role) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);