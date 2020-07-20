# TypeScript Bidirectional Map

A TypeScript Version of [@educastellano](https://github.com/educastellano)'s [BiDirectional Map](https://github.com/educastellano/bidirectional-map)

Create "key/value" collections of one-to-one correspondence. Internally it uses two [Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) objects, so both keys and values can be of any type.

# Install

    npm install ts-bidirectional-map --save

# Usage

```ts
    import BiMap from 'ts-bidirectional-map';
    
    // Create an empty map
    const map = new BiMap<String, String>();
    map.set('bob', 'alice');
    map.get('bob');          // 'alice'
    map.getKey('alice');     // 'bob'

    map2.has('bob');          // true
    map2.hasValue('alice');   // true
    map2.deleteValue('alice');
```

# API

### Properties

| Property | Return Type |  Description |
|:---|:---|:---|
| size | *any* | Returns the number of key/value pairs |

### Methods

| Method | Arguments | Return Type |  Description |
|:---|:---|:---|:---|
| set | key: *K*, value: *V*  |  | Sets a new key/value pair |
| get | key: *K* | *V* | Returns the value |
| getKey | value: *V* | *K* | Returns the key |
| clear |  |  | Removes all key/value pairs |
| delete | key: *K* | | Deletes a key/value pair by **key** |
| deleteValue | value: *V* | | Deletes a key/value pair by **value** |
| entries |  | *MapIterator* | Returns a new Iterator object that contains an array of [key, value] for each element in the structure |
| has | key: *K* | *boolean*| Returns a *true* if it exists a pair with the provided **key**, *false* otherwise  |
| hasValue | value: *V* | *boolean* | Returns a *true* if it exists a pair with the provided **value**, *false* otherwise  |
| keys |  | *MapIterator* | Returns a new Iterator object that contains the **keys** for each element in the structure |
| values |  | *MapIterator* | Returns a new Iterator object that contains the **values** for each element in the structure |