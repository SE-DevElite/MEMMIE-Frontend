import { makeObservable, observable, action } from 'mobx'

class CounterStore {
  count: number = 0

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action
    })
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}

const counterStore = new CounterStore()
export default counterStore
