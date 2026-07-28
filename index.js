let nome = "Lima"
let nivelDeXp = 9000
let nivelDePatente = ""

if (nivelDeXp <=1000){nivelDePatente = "ferro"}
else if (nivelDeXp >=1001 && nivelDeXp <=2000){nivelDePatente = "Bronze"}
else if (nivelDeXp >=2001 && nivelDeXp <=5000){nivelDePatente = "Prata"}
else if (nivelDeXp >=5001 && nivelDeXp <=7000){nivelDePatente = "Ouro"}
else if(nivelDeXp >=7001 && nivelDeXp <=8000){nivelDePatente = "Platina"}
else if(nivelDeXp >=8001 && nivelDeXp <=9000){nivelDePatente = "Ascendente"}
else if(nivelDeXp >=9001 && nivelDeXp <=10000){nivelDePatente = "Imortal"}
else if(nivelDeXp >=10001){nivelDePatente= "Radiante"}

console.log ("O Herói de nome " + nome + " está no nível de " + nivelDePatente)