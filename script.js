for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

for (let i = 0; i <= 200; i += 20) {
    console.log(i);
  }
  

for (let i = 1; i <= 5; i++) {
    let gwiazdki = '';
    for (let j = 1; j <= i; j++) {
        gwiazdki += '*';
    }
    console.log(gwiazdki);
}
for (let i = 5; i >= 1; i--) {
    let gwiazdki = '';
    for (let j = 1; j <= 2 * i - 1; j++) { 
        gwiazdki += '*';
    }
    console.log(gwiazdki);
}

let liczby = [];

for (let i = 1; i <= 5; i++) {
    liczby.push(Math.pow(i, 3)); 
}

console.log(liczby);





/* za pomocą pętli for wyświetl w oknsoli wzór:
*********
*******
*****
***
*


*/



/*
za pomocą pętli for wygeneruj tablice z liczbami od 1 do 5 oraz podnieść je do potęgi 3
*/
