import { fromEvent } from "rxjs";

interface IMovie {
    title: string
}

const button = document.getElementById('button')
const output = document.getElementById('output')
const click = fromEvent(button, 'click');


const load = (url: string): void => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
        let movies = JSON.parse(xhr.responseText)

        movies.forEach((movie: IMovie) => {
            const div = document.createElement('div')
            div.innerText = movie.title
            output.appendChild(div)
        })
    })

    xhr.open('GET', url)
    xhr.send()
}


click.subscribe({
    next: () => load('./movies.json'),
    error: (error: Error) => console.log('error ', error),
    complete: () => console.log('complete')
})