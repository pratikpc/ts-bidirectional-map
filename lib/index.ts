export default class BiDirectionalMap<K, V>{
    public ForwardMap = new Map<K, V>();
    public ReverseMap = new Map<V, K>();

    public get size() {
        return this.ForwardMap.size;
    }
    public set(key: K, value: V) {
        if (this.ForwardMap.has(key)) {
            const _value = this.ForwardMap.get(key);
            if (_value != null)
                this.ReverseMap.delete(_value)
        }
        if (this.ReverseMap.has(value)) {
            const _key = this.ReverseMap.get(value)
            if (_key != null)
                this.ForwardMap.delete(_key);
        }
        this.ForwardMap.set(key, value);
        this.ReverseMap.set(value, key);
    }
    public get(key: K) {
        return this.ForwardMap.get(key);
    }
    public getKey(value: V) {
        return this.ReverseMap.get(value);
    }
    public clear() {
        this.ForwardMap.clear();
        this.ReverseMap.clear();
    }
    public delete(key: K) {
        const value = this.ForwardMap.get(key);
        if (value == null)
            return;
        this.ForwardMap.delete(key);
        this.ReverseMap.delete(value);
    }
    public deleteValue(value: V) {
        const key = this.ReverseMap.get(value);
        if (key == null)
            return;
        this.ForwardMap.delete(key);
        this.ReverseMap.delete(value);
    }
    public entries() {
        return this.ForwardMap.entries();
    }
    public has(key: K) {
        return this.ForwardMap.has(key);
    }
    public hasValue(value: V) {
        return this.ReverseMap.has(value);
    }
    public keys() {
        return this.ForwardMap.keys();
    }
    public values() {
        return this.ForwardMap.values();
    }
}