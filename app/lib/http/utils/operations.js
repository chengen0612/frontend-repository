export function deepMerge(target, source) {
  const targetCopy = structuredClone(target);
  const sourceCopy = structuredClone(source);

  for (const [key, value] of Object.entries(sourceCopy)) {
    if (key in targetCopy && typeof value === 'object' && value !== null) {
      targetCopy[key] = deepMerge(targetCopy[key], value);
    } else {
      targetCopy[key] = value;
    }
  }

  return targetCopy;
}
