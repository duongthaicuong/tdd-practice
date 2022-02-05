export class Stack {
  top: number
  items: any

  constructor() {
    this.top = -1
    this.items = {}
  }
  
  push(value: number): void {
    this.top++
    this.items[this.top] = value
  }

  pop(): number {
    const last = this.items[this.top]
    delete(this.items[this.top])
    this.top--
    return last
  }
}