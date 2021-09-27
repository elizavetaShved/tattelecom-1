export function checkExistParent(child, parent) {
  let targetElement = child;

  do {
    if (targetElement === parent) {
      return true;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);

  return false;
}
