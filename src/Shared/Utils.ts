/**
 * @description Function to debounce multiple calls within a specified time 
 * @param func
 * @param thresholdTime
 */
export const debounce = (func: Function, thresholdTime = 300) => {
  let interval: number | null = null;
  return (...args: any) => {
    clearTimeout(interval as number);
    // to support option listeners from components Ref: InputBox.tsx
    if (func) {
      interval = setTimeout(() => {
        interval = null;
        func?.apply(this, args);
      }, thresholdTime) as any;
    }
  };
};

/**
 * @description test if the string contains only digits or alphabets
 * @param text
 * @returns boolean
 */
export const isNumAlpha = (text: string): boolean => {
  return /^[A-Za-z0-9]*$/.test(text);
};