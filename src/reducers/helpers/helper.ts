//https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
import {MenuItem} from "../../Components/Menu";
import {GalleryImage} from "../../interfaces/GalleryImage";
import {Udalost} from "../../interfaces/Event";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const jsonState = JSON.parse(serializedState);

    return jsonState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const trimmedState = { ...state };
    delete trimmedState["ajaxLoading"];
    const serializedState = JSON.stringify(trimmedState);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // ignore write errors
  }
};

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
    description:"Bude n??m c??ou spravi?? v???? svadobn?? de?? jedine??n??m. Radi v??s priv??tame na osobnom stretnut??, po??as ktor??ho si m????ete prezrie?? na??e priestory, dohodn???? svadobn?? menu a doladi?? v??etky detaily.",
    id:0,
  },
  {
    name:"Rodinna Turistika",
    imageSrc:"/assets/images/eventy/event 1.jpg",
    description:"Prineste svoj biznis do h??r a u????vajte si mno??stvo v??hod. Prekr??sne hory s?? ide??lnym miestom pre va??e jedine??n?? podujatia. Priprav??me pre v??s teambuilding pod??a va??ich po??iadaviek, ktor?? bude pre v??s skuto??n??m z????itkom.",
    id:1,
  },
  {
    name:"Ritualne zabijanie",
    imageSrc:"/assets/images/eventy/event 3.jpg",
    description:"Na??e priestory s?? vhodn?? na uskuto??nenie r??znych rodinn??ch stretnut?? ako s?? oslavy naroden??n, prom??ci??, krstov i stret??vky. Vybra?? si m????ete zo ??irokej ponuky menu, dezertov, n??pojov a kvalitn??ch v??n.",
    id:2,
  },





];

