
import {MenuItem} from "../Components/Menu";
import {GalleryImage} from "../interfaces/GalleryImage";
import {Udalost} from "../interfaces/Event";
import * as yup from "yup";



export const menuScrollHandler = (id) => {
  const element = document.getElementById(id);
  console.log(element);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export const menuItems: MenuItem[] = [
  { title: "Interier", id: "interier" },
  { title: "Exterier", id: "exterier" },
  { title: "O nas", id: "o-nas" },
  { title: "Event", id: "event" },
];
export const imagesList: GalleryImage[] = [
  {
    id: 0,
    image: "/assets/images/Exterier/Exterier (1).jpg",
    colspan: "col-span-2",
  },

  {
    id: 1,
    image: "/assets/images/Exterier/Exterier (6).jpg",
    colspan: "col-span-2",
  },

  {
    id: 3,
    image: "/assets/images/Exterier/Exterier (5).jpg",
    colspan: "col-span-1",
  },
  {
    id: 4,
    image: "/assets/images/Exterier/Exterier (3).jpg",

    colspan: "col-span-1 ",
  },
  {
    id: 5,
    image: "/assets/images/Interier/Interier (8).jpg",

    colspan: "col-span-2",
  },
];
export const imagesList2: GalleryImage[] = [
  {
    id: 0,
    image: "/assets/images/Interier/Interier (1).jpg",
    colspan: "col-span-2",
  },

  {
    id: 1,
    image: "/assets/images/Interier/Interier (2).jpg",

    colspan: "col-span-2",
  },

  {
    id: 3,
    image: "/assets/images/Room1.jpg",

    colspan: "col-span-1",
  },
  {
    id: 4,
    image: "/assets/images/Interier/Interier (7).jpg",

    colspan: "col-span-1 ",
  },
  {
    id: 5,
    image: "/assets/images/Interier/Interier (7).jpg",

    colspan: "col-span-2",
  },
];
export const eventy: Udalost[] = [
  {
    name:"Svadba",
    imageSrc:"/assets/images/eventy/event 2.jpg",
    description:"Bude nám cťou spraviť váš svadobný deň jedinečným. Radi vás privítame na osobnom stretnutí, počas ktorého si môžete prezrieť naše priestory, dohodnúť svadobné menu a doladiť všetky detaily.",
    id:0,
  },
  {
    name:"Rodinna Turistika",
    imageSrc:"/assets/images/eventy/event 1.jpg",
    description:"Prineste svoj biznis do hôr a užívajte si množstvo výhod. Prekrásne hory sú ideálnym miestom pre vaše jedinečné podujatia. Pripravíme pre vás teambuilding podľa vašich požiadaviek, ktorý bude pre vás skutočným zážitkom.",
    id:1,
  },
  {
    name:"Ritualne zabijanie",
    imageSrc:"/assets/images/eventy/event 3.jpg",
    description:"Naše priestory sú vhodné na uskutočnenie rôznych rodinných stretnutí ako sú oslavy narodenín, promócií, krstov i stretávky. Vybrať si môžete zo širokej ponuky menu, dezertov, nápojov a kvalitných vín.",
    id:2,
  },





];

export const reservationSchema = yup
    .object()
    .shape({
      name: yup.string().required("Meno musi byt vyplnene"),
      lastName: yup.string().required("Priezvisko musi byt vyplnene"),
      guests: yup.string().nullable().required("Pocet hosti musi byt zadany"),
    })
    .required();


export const schema = yup
    .object()
    .shape({
      address: yup.string().required("Adresa musi byt vyplnena"),
      email: yup.string().email().required("Email musi byt vyplneny"),
      phone: yup.string().required("Tel. cislo musi byt vyplnene"),
      name: yup.string().required("Meno musi byt vyplnene"),
      lastName: yup.string().required("Priezvisko musi byt vyplnene"),
      guests: yup.string().required("Pocet hosti musi byt zadany"),
    })
    .required();



export const addDaysToDate = (date: Date, days: number): Date => {
  let result = new Date(date);
  result.setDate(result.getDate() + days)
  return (result);
}