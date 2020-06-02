const greeting: string = "Hello World!"

console.log(greeting)

import { dayOfYear,
         currentDayOfYear 
} from 'https://deno.land/std/datetime/mod.ts'

const created: string = "2020-06-02"
console.log(dayOfYear(new Date(created)))
console.log(currentDayOfYear())

if (dayOfYear(new Date(created)) >= currentDayOfYear()){
    console.log("This was created on ",created)
}