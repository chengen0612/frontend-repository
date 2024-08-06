function deepClone(val) {
  return JSON.parse(JSON.stringify(val));
}

export function deepMerge(target, source) {
  const targetCopy = deepClone(target);
  const sourceCopy = deepClone(source);

  for (const [key, value] of Object.entries(sourceCopy)) {
    if (key in targetCopy && typeof value === "object" && value !== null) {
      targetCopy[key] = deepMerge(targetCopy[key], value);
      continue;
    }
    targetCopy[key] = value;
  }

  return targetCopy;
}
