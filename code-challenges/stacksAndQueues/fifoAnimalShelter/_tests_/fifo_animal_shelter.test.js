'use strict';

const AnimalShelter = require('../fifo_animal_shelter');

describe('FIFO Animal Shelter', () => {
  describe('enqueue', () => {
    it('only accecpts a dog or a cat', () => {
      let animalShelter = new AnimalShelter();
      expect(() => {animalShelter.enqueue('snake');}).toThrow('our shelter doesn\'t accecpt that kind of animal');
    });

    it('requires an argument of dog or cat', () => {
      let animalShelter = new AnimalShelter();
      expect(() => {animalShelter.enqueue();}).toThrow('you must enter either a dog or cat');
    });

    it('adds an animal to the back of the line', () => {
      let animalShelter = new AnimalShelter();
      animalShelter.enqueue('dog');
      animalShelter.enqueue('cat');
      animalShelter.enqueue('cat');
      expect(animalShelter.peek().animal).toEqual('dog');
    });
  });

  describe('dequeue', () => {
    it('throws an error if the animal shelter is empty', () => {
      let animalShelter = new AnimalShelter();
      expect(() => {animalShelter.dequeue('dog');}).toThrow('there are no animals available');
    });

    it('throws an error if you do not enter a preference', () => {
      let animalShelter = new AnimalShelter();
      animalShelter.enqueue('dog');
      animalShelter.enqueue('cat');
      expect(() => {animalShelter.dequeue();}).toThrow('do you want a dog or a cat?');
    });

    it('removes a prefered animal from who has been there the longest', () => {
      let animalShelter = new AnimalShelter();
      animalShelter.enqueue('dog');
      animalShelter.enqueue('cat');
      animalShelter.dequeue('dog');
      expect(animalShelter.peek().animal).toEqual('cat');
      // animalShelter.enqueue('dog');
      // expect(animalShelter.peek().animal).toEqual('cat');
    });
  });
});