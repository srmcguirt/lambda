function isObject(value: unknown): boolean {
  return (
    value !== null && typeof value === 'object' && value.constructor === Object
  );
}

function isArray(value: unknown): boolean {
  return (
    value !== null
    && Array.isArray(value)
    && typeof value === 'object'
  );
}
