//S(n) = 1 + 2 + 3 + ... + n
function TinhTong(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Thử nghiệm hàm với một số n bất kì
const n: number = 5;
const ketQua: number = TinhTong(n);
console.log(`Tổng S(${n}) = ${ketQua}`);
