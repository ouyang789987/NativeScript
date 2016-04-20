export function lazy<T>(action: () => T): () => T {
    return (() => {
        let _value: T;
        return () => _value || (_value = action());
    })();
}