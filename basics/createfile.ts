const encoder = new TextEncoder()

const greetText = encoder.encode('Hello World\nMy name is Abhinav :D\n')

await Deno.writeFile("greet.txt", greetText)