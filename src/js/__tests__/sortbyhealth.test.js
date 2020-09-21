import newArray from '../sortbyhealth';

test('small first', () => {
    const received = newArray([
     {name: 'мечник', health: 10},
     {name: 'маг', health: 100},
     {name: 'лучник', health: 80}
   ]);
   const expected = [
     {name: 'маг', health: 100},
     {name: 'лучник', health: 80},
     {name: 'мечник', health: 10}
   ];
   expect(received).toEqual(expected);
 });
 
 test('big first', () => {
   const received = newArray([
     {name: 'маг', health: 100},
     {name: 'мечник', health: 10},
     {name: 'лучник', health: 80}
   ]);
   const expected = [
     {name: 'маг', health: 100},
     {name: 'лучник', health: 80},
     {name: 'мечник', health: 10}
   ];
   expect(received).toEqual(expected);
 });
 
 test('middle first', () => {
   const received = newArray([
     {name: 'лучник', health: 80},
     {name: 'мечник', health: 10},
     {name: 'маг', health: 100}
   ]);
   const expected = [
     {name: 'маг', health: 100},
     {name: 'лучник', health: 80},
     {name: 'мечник', health: 10}
   ];
   expect(received).toEqual(expected);
 })