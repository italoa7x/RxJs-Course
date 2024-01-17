import { Observable, from } from 'rxjs';

let numbers = [1, 5, 10]
let source = from(numbers);

let source1 = new Observable()

const myObserver = {
    next: (value: number) => console.log('value ', value),
    error: (error: Error) => console.log('error ', error),
    complete: () => console.log('complete json')
}

function component() {
    source.subscribe(myObserver)
}

component()