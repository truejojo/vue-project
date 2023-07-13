const getFirstTenWordsOfString = (string) => {
  const subString = string.split(' ').slice(0, 10).join(' ')
  return subString < 10 ? subString : `${subString}...`
}

export { getFirstTenWordsOfString }
