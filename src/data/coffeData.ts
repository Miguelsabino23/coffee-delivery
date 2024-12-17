import expresso from "../assets/expresso.png";
import americano from "../assets/americano.png";
import expressoCremoso from "../assets/expressoCremoso.png";
import expressoGelado from "../assets/cafeGelado.png";
import cafeComLeite from "../assets/cafeComLeite.png";
import latte from "../assets/latte.png";
import capuccino from "../assets/capuccino.png";
import macchiato from "../assets/mocchiato.png";
import mocaccino from "../assets/mochaccino.png";
import chocolateQuente from "../assets/chocolateQuente.png";
import cubano from "../assets/cubano.png";
import havaiano from "../assets/havaiano.png";
import arabe from "../assets/arabe.png";
import irlandes from "../assets/irlandes.png";

export const ListCoff = [
  {
    id: "1",
    img: expresso,
    type: ["TRADICIONAL"],
    coff: "Expresso Tradicional",
    info: "O tradicional café feito com água quente e grãos moídos",
    price: 9.99,
  },
  {
    id: "2",
    img: americano,
    type: ["TRADICIONAL"],
    coff: "Expresso Americano",
    info: "Expresso diluído, menos intenso que o tradicional",
    price: 9.99,
  },
  {
    id: "3",
    img: expressoCremoso,
    type: ["TRADICIONAL"],
    coff: "Expresso Cremoso",
    info: "Café expresso tradicional com espuma cremosa",
    price: 9.99,
  },
  {
    id: "4",
    img: expressoGelado,
    type: ["TRADICIONAL", "GELADO"],
    coff: "Expresso Gelado",
    info: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.99,
  },
  {
    id: "5",
    img: cafeComLeite,
    type: ["TRADICIONAL", "COM LEITE"],
    coff: "Café com Leite",
    info: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.99,
  },
  {
    id: "6",
    img: latte,
    type: ["TRADICIONAL", "COM LEITE"],
    coff: "Latte",
    info: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.99,
  },
  {
    id: "7",
    img: capuccino,
    type: ["TRADICIONAL", "COM LEITE"],
    coff: "Capuccino",
    info: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.99,
  },
  {
    id: "8",
    img: macchiato,
    type: ["TRADICIONAL", "COM LEITE"],
    coff: "Macchiato",
    info: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.99,
  },
  {
    id: "9",
    img: mocaccino,
    type: ["TRADICIONAL", "COM LEITE"],
    coff: "Mocaccino",
    info: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.99,
  },
  {
    id: "10",
    img: chocolateQuente,
    type: ["ESPECIAL", "COM LEITE"],
    coff: "Chocolate Quente",
    info: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.99,
  },
  {
    id: "11",
    img: cubano,
    type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    coff: "Cubano",
    info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.99,
  },
  {
    id: "12",
    img: havaiano,
    type: ["ESPECIAL"],
    coff: "Havaiano",
    info: "Bebida adocicada preparada com café e leite de coco",
    price: 9.99,
  },
  {
    id: "13",
    img: arabe,
    type: ["ESPECIAL"],
    coff: "Árabe",
    info: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.99,
  },
  {
    id: "14",
    img: irlandes,
    type: ["ESPECIAL", "ALCOÓLICO"],
    coff: "Irlandês",
    info: "Bebida a base de café, uisque irlandês, açucar e chantily",
    price: 9.99,
  },
];
