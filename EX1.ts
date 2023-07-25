const pets = [
  { name: "dog", size: "big", weight: 20 },
  { name: "cat", size: "small", weight: 5 },
  { name: "lion", size: "big", weight: 50 },
];

function layTen(
  pets: { name: string; size: string; weight: number }[]
): string[] {
  return pets.map((pet) => pet.name);
}

function layCanNangDuoi30kg(
  pets: { name: string; size: string; weight: number }[]
): { name: string; size: string; weight: number }[] {
  return pets.filter((pet) => pet.weight < 30);
}

const tenConVat: string[] = layTen(pets);
console.log("Tên các con vật là:", tenConVat);

const layConVatDuoi30kg = layCanNangDuoi30kg(pets);
console.log("Con vật có cân nặng dưới 30kg", layConVatDuoi30kg);
