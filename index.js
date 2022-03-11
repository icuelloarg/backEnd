class User {
    constructor(name, lastname, books = [], pets = []){
        this.name = name;
        this.lastname = lastname;
        this.books = books;
        this.pets = pets;
    }

    getFullname(){
        return `${this.name} ${this.lastname}`;
    }

    addPet(pet){
      this.pets.push(pet);
    }

    countPets(){
        return this.pets.length;
    }

    addBook(book){
      this.books.push(book);
    }

    getBookNames(){
        return this.books.map(book => book.name);
    }
  }
  

  const firstUser = new User('Isaias', 'Cuello', [{name:'Choque de Reyes', author: 'George R. R. Martin'},{name:'Full dark, no stars', author: 'Dominique Lapierre'},{name:'Creativity Inc', author: 'Ed Catmull'}],['Perro', 'Pato','Tortuga', 'Canario']);
  

  console.log(firstUser.countPets());

  firstUser.addPet("Terodactilo");

  firstUser.addBook({name:'The Servant', autor:'James C Hunter'})

  console.log(firstUser.getFullname());

  console.log(firstUser.countPets());

  console.log(firstUser.getBookNames());
