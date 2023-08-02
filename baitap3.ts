function isEvenNumber(n: number): boolean {
  return n % 2 === 0;
}

// Thử nghiệm hàm với một số n bất kỳ
const number: number = 9;
if (isEvenNumber(number)) {
  console.log(`${number} là số chẵn.`);
} else {
  console.log(`${number} không phải là số chẵn.`);
}
