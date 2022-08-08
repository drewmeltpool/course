/**
 * ЗАДАНИЕ - 2
 *
 * Написать функцию-кнструктор для объектов типа Table.
 *
 * Аргументы:
 * 1 - название
 * 2 - наличие выдвижных полок
 * 3 - размеры столешницы в формате {x:10, y:20}
 * 4 - материал столешницы
 * 5 - материал ножек
 *
 * Если хотябы один из размеров столешницы является не целым числом - бросать исключение TypeError.
 * Если название материала нет в списке разрешенных материалов - бросать исключение.
 * Если материал ножек выбран НЕ метал, то проверить чтобы столешница была не из мрамора. В пртивном случае - бросать исключение.
 *
 * Разрешенный список материалов столешницы - дуб, ясень, мрамор, мрамор с инкрустрацией, мрамор с подогревом, МДФ
 * Список материалов ножек - метал, дуб, ясень, МДФ, мрамор
 */

function Table(title, hasShelves, sizes, deskMaterial, legsMaterial) {
  const deskMaterials = ["дуб", "ясень", "мрамор", "мрамор с инкрустрацией", "мрамор с подогревом", "МДФ"];
  const legsMaterials = ["метал", "дуб", "ясень", "МДФ", "мрамор"];

  this.title = title;
  this.hasShalves = hasShelves;
  this.isCorrectSize = function () {
    debugger
    return (parseInt(sizes.x) === sizes.x && parseInt(sizes.y) === sizes.y);
  };

  if (this.isCorrectSize()) {
    this.sizes = sizes;
  } else {
    throw new TypeError("Not valid sizes")
  }

  this.isInAllowedMaterials = () => deskMaterials.some(material => material === deskMaterial);

  if (this.isInAllowedMaterials()) {
    this.deskMaterial = deskMaterial
  } else {
    throw new TypeError("Not valid desk material")
  }

  this.isCorrectLegsMaterial = () => {
    if (legsMaterial !== "метал") {
      if (!this.deskMaterial.includes("мрамор")) {
        this.legsMaterial = legsMaterial;
      } else {
        throw new TypeError("Not valid legs material");
      }
    } else {
      this.legsMaterial = legsMaterial;
    }
  }
}


try {
  const myTable = new Table("Gogi!", false, {x:1000, y:2000}, "мрамор с подогревом", "мрамор");
  const yoursTable = new Table("Gogi!", false, {x:1500, y:1680}, "мрамор с подогревом", "мрамор");

  console.log(myTable);
  console.log(yoursTable);
} catch (e) {
  document.write(e.message);
  console.error(e);
}