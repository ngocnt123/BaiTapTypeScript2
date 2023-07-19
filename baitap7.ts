const animals = [
    {
      name: "cat",
      size: "small",
      weight: 5,
    },
    {
      name: "dog",
      size: "small",
      weight: 10,
    },
    {
      name: "lion",
      size: "medium",
      weight: 150,
    },
    {
      name: "elephant",
      size: "big",
      weight: 5000,
    },
  ];
  
  function LayTenCacConVat(animals: { name: string; size: string; weight: number }[]): string[] {
    return animals.map((animal) => animal.name);
  }
  
  function LocConVatDuoi150kg(animals: { name: string; size: string; weight: number }[]): { name: string; size: string; weight: number }[] {
    return animals.filter((animal) => animal.weight < 150);
  }
  
  function TinhTongCanNang(animals: { name: string; size: string; weight: number }[]): number {
    return animals.reduce((total, animal) => total + animal.weight, 0);
  }
  
  const tenCacConVat: string[] = LayTenCacConVat(animals);
  console.log("Danh sách tên các con vật:", tenCacConVat);
  
  const conVatDuoi150kg = LocConVatDuoi150kg(animals);
  console.log("Danh sách các con vật có cân nặng dưới 150kg:", conVatDuoi150kg);
  
  const tongCanNang: number = TinhTongCanNang(animals);
  console.log("Tổng cân nặng của tất cả con vật:", tongCanNang);
  
  const tongCanNangDuoi150kg: number = TinhTongCanNang(conVatDuoi150kg);
  console.log("Tổng cân nặng của tất cả con vật có cân nặng dưới 150kg:", tongCanNangDuoi150kg);
  