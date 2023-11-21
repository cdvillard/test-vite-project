export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is <span class="count">${counter}</span>`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
