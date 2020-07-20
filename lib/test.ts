import test from "tape";
import BiMap from "./index";

function makeOne() {
    const map = new BiMap<String, String>();
    map.set('john', 'mary');
    map.set('bob', 'alice');
    map.set('ptolemy', 'cleopatra');
    return map;
}
test('it should create an empty Map', function (t) {
    const empty = new BiMap();
    t.equals(empty instanceof BiMap, true);
    t.equals(empty.size, 0);
    t.end();
});

test('it should get the value by key', function (t) {
    const monogamy = makeOne();
    t.equals(monogamy.get('bob'), 'alice');
    t.end();
});

test('it should get the key by value', function (t) {
    const monogamy = makeOne()
    t.equals(monogamy.getKey('alice'), 'bob');
    t.end();
});

test('it should set change values of same key', function (t) {
    const monogamy = new BiMap();
    monogamy.set('a', 0);
    monogamy.set('a', 1);
    t.equals(monogamy.get('a'), 1);
    t.equals(monogamy.getKey(1), 'a');
    t.equals(monogamy.hasValue(0), false);
    t.equals(monogamy.hasValue(1), true);
    t.end();
});

test('it should set change keys of same value', function (t) {
    const monogamy = new BiMap();
    monogamy.set('a', 0);
    monogamy.set('b', 0);
    t.equals(monogamy.get('b'), 0);
    t.equals(monogamy.getKey(0), 'b');
    t.equals(monogamy.has('a'), false);
    t.equals(monogamy.has('b'), true);
    t.end();
});

test('it should set the same key-value', function (t) {
    const monogamy = new BiMap();
    monogamy.set('a', 0);
    monogamy.set('a', 0);
    t.equals(monogamy.get('a'), 0);
    t.equals(monogamy.getKey(0), 'a');
    t.equals(monogamy.has('a'), true);
    t.equals(monogamy.hasValue(0), true);
    t.end();
});


test('it should get the size', function (t) {
    const monogamy = makeOne();
    t.equals(monogamy.size, 3);
    t.end();
});

test('it should clear', function (t) {
    const monogamy = makeOne();
    monogamy.clear();
    t.equals(monogamy.size, 0);
    t.end();
});

test('it should delete by key', function (t) {
    const monogamy = makeOne()
    monogamy.delete('john')
    t.equals(monogamy.has('john'), false);
    t.equals(monogamy.hasValue('mary'), false);
    t.end();
});

test('it should delete by value', function (t) {
    const monogamy = makeOne()
    monogamy.deleteValue('alice')
    t.equals(monogamy.has('bob'), false);
    t.equals(monogamy.hasValue('alice'), false);
    t.end();
});

test('it should return the entries', function (t) {
    const monogamy = makeOne()
    const entriesIt = monogamy.entries()
    t.equals(entriesIt.next().value[0], 'john');
    t.equals(entriesIt.next().value[1], 'alice');
    t.end();
});

test('it should check if it has a key', function (t) {
    const monogamy = makeOne()
    t.equals(monogamy.has('bob'), true);
    t.equals(monogamy.has('bill'), false);
    t.end();
});

test('it should check if it has a value', function (t) {
    const monogamy = makeOne()
    t.equals(monogamy.hasValue('alice'), true);
    t.equals(monogamy.hasValue('laura'), false);
    t.end();
});


test('it should return the keys', function (t) {
    const monogamy = makeOne()
    const keysIt = monogamy.keys()
    t.equals(keysIt.next().value, 'john');
    t.equals(keysIt.next().value, 'bob');
    t.end();
});

test('it should return the values', function (t) {
    const monogamy = makeOne()
    const valuesIt = monogamy.values()
    t.equals(valuesIt.next().value, 'mary');
    t.equals(valuesIt.next().value, 'alice');
    t.end();
});