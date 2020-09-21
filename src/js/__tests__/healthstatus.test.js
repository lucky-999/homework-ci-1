import health from '../healthstatus';

test('health > 50', () => {
    const received = health({name: 'Маг', health: 90});
    const expected = 'healthy';

    expect(received).toBe(expected);
})

test('health == 50', () => {
    const received = health({name: 'Маг', health: 50});
    const expected = 'wounded';
    expect(received).toBe(expected);
})

test('health < 50', () => {
    const received = health({name: 'Маг', health: 35});
    const expected = 'wounded';
    expect(received).toBe(expected);
})

test('health == 15', () => {
    const received = health({name: 'Маг', health: 15});
    const expected = 'wounded';
    expect(received).toBe(expected);
})

test('health < 15', () => {
    const received = health({name: 'Маг', health: 7});
    const expected = 'critical';
    expect(received).toBe(expected);   
})
