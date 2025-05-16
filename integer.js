// A = +prompt('A kesma')
// B = +prompt('B kesma')
// x = Math.floor(A / B)
// y = A - B * x
// document.writeln('B kesma = ', x + 
//     ' marta joylashadi' + '<br>')
// document.writeln('Ortib qolgan qismi ', y)


// 7-misol
// a = +prompt('2 xonali son kiriting')
// onlik = Math.floor(a / 10);
// document.writeln("o'nlik = ", onlik + '<br>')
// birlik = a % 10
// document.writeln("birlik = ", birlik + '<br>')
// document.writeln(onlik + birlik)


// 23-misol
n = 10880
s = 3600
vaqt = Math.floor(n/s)
document.writeln('kun boshidan boshlab otgan soat = ', vaqt +'<br>')
minut = 10880 % 3600
minut2 = Math.floor(minut / 60)
document.writeln('kun boshidan boshlab otgan minut = ', minut2 +'<br>')
sikund = Math.floor(minut % 60)
document.writeln('kun boshidan boshlab otgan sikund = ', sikund +'<br>')
