import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) throw new Error({ error: 500 });
  const strArray = str.split(' ');
  return `${strArray[0]} ${(strArray[strArray.length - 1].substr(0, 1)).toUpperCase()}.`;
}

export { abbreviateString };
