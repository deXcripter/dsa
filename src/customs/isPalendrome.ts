const checkPalendrome = (val: unknown) => {
  if (typeof val !== 'string') return Error(`${val} is not a string`);
  console.log(val, typeof val);
};

checkPalendrome('29');

export default checkPalendrome;
