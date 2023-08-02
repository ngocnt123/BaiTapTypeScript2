function sum({ John, Ann, Pete }: { John: number; Ann: number; Pete: number }) {
  return John + Ann + Pete;
}

console.log(sum({ John: 100, Ann: 160, Pete: 130 }));
