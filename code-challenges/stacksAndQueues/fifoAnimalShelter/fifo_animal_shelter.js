'use strict';

class Animal {
  constructor (animal){
    if(animal === 'dog' || animal ==='cat'){
      this.next = null;
      this.animal = animal;
    
    } else {
      throw 'our shelter doesn\'t accecpt that kind of animal';
      
    }
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(animal){
    if(!arguments.length){ throw 'you must enter either a dog or cat';}

    let newAnimal = new Animal(animal);

    if(!this.front && !this.rear){
      this.front = newAnimal;
      this.rear = newAnimal;
    }

    this.rear.next = newAnimal;
    newAnimal = this.rear;
  }

  dequeue(pref){
    if(!arguments.length){ throw 'do you want a dog or a cat?';}
    if(!this.front){ throw 'there are no animals available';}

    let current = this.front;
    let previous = this.front;

    if(this.front.animal === pref){
      let temp = this.front;
      this.front = this.front.next;
      return temp;
    }

    while(current){
      if(current.value === pref){
        previous.next = current.next;
        return current;
      }

      current = current.next;
      previous = current;
    }
  }

  peek(){
    return this.front;
  }
}

module.exports = AnimalShelter;