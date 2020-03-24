export function* createIdGenerator() {
  let id = 1

  while (0 <= id){
    yield id++
  }
}