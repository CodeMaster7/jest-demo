const fns = require('./utils/functions');

describe('Tests for App', () => {
  describe('Tests for getPerson', () => {
    test('should return data', () => {
      expect(fns.getPerson()).toBeDefined();
    })
    test('should return Luke Skywalker', () => {
      expect.assertions(1);
      return fns.getPerson().then(res => {
        expect(res.name).toBe("Luke Skywalker");
      })
    })
  })
  describe('tests for getStarship', () => {
    test('should return data', () => {
      expect.assertions(1)
      return fns.getStarship(9).then(res => {
        expect(res).toBeDefined()
      })
    })
    test('should return an object', () => {
      expect.assertions(1);
      return fns.getStarship(9).then(data => {
        expect(typeof data).toBe('object');
      }) 
    })
    test('should return an object with a property of "name"', () => { 
      expect.assertions(1);
      return fns.getStarship(9).then(data => {
        expect(data.hasOwnProperty('name')).toBe(true);
      });
    })
    test('should return an object with the name "Death Star"', () => {
      expect.assertions(1);
      return fns.getStarship(9).then(data => {
        expect(data.name).toBe('Death Star');
      })
    })
    test('should return an error if it receives a string', () => {
      expect(fns.getStarship('nine')).toBe('Oops you need a number')
    })
  })
})