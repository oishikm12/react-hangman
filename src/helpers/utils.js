/**
 * Inverts selection after a while
 * @param {Function} setter The parameter to toggle
 */
function delayToggle(setter) {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
}

/**
 * Tries to determine wether a sentence is correct or not
 * @param {Array<String>} correct All correct attempts
 * @param {Array<String>} wrong All wrong attempts
 * @param {String} word The word to check
 * @return {String} Status
 */
function judge(correct, wrong, word) {
  let status = 'win';

  word.split('').forEach((letter) => {
    if (correct.indexOf(letter) === -1) status = '';
  });

  if (wrong.length >= 6) status = 'lose';

  return status;
}

export { delayToggle, judge };
