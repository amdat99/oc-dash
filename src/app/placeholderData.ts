import { ListData } from "@/components/list/List";

export const posts = [
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Harry Potter",
    nameVerified: true,
    date: "2021-09-01",
    memberGroup: "Pro member",
    action: "replied to the topic",
    actionLink: "Welome to the community",
    location: "in the forum",
    locationLink: "Introductions",
    content: "<p>Hello Everyone</p>",
    reactions: [
      {
        reaction: "👍",
        count: 10,
      },
      {
        reaction: "👎",
        count: 2,
      },
    ],
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Random Person",
    nameVerified: false,
    date: "2021-09-01",
    memberGroup: "Pro member",
    action: "Created the topic",
    actionLink: "Welome to the community",
    location: "in the forum",
    locationLink: "Introductions",
    content: "<a href='https://www.google.com' target='_blank'>Google.com</a>",
    image: "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    commentNumber: 2,
    shareNumber: 3,
    reactions: [
      {
        reaction: "👍",
        count: 4,
      },
    ],
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Harry Potter",
    nameVerified: true,
    date: "2021-09-01",
    memberGroup: "Pro member",
    action: "replied to the topic",
    actionLink: "Welome to the community",
    location: "in the forum",
    locationLink: "Introductions",
    content: "<p>Hello Everyone</p>",
    reactions: [
      {
        reaction: "👍",
        count: 10,
      },
      {
        reaction: "👎",
        count: 2,
      },
    ],
  },
] as ListData[];

export const members = [
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Random Person",
    nameVerified: true,
    subtitle: "@randomperson",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Harry Potter",
    subtitle: "@harrypotter",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "John Smith",
    subtitle: "@johnsmith",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Travis Scott",
    subtitle: "@travisscott",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Famous Person",
    subtitle: "@famousperson",
  },
] as ListData[];

export const quests = [
  {
    iconUrl: "",
    name: "Posting Machine",
    subtitle: "Post more than 20 profile actvitites in a day",
    bottomLine: true,
  },
] as unknown as ListData[];

export const groups = [
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Innovators",
    subtitle: "4 members",
    rightIcon: "https://cdn3.iconfinder.com/data/icons/feather-5/24/globe-512.png",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Developers",
    subtitle: "6 members",
    rightIcon: "https://cdn3.iconfinder.com/data/icons/feather-5/24/globe-512.png",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Designers",
    subtitle: "2 members",
    rightIcon: "https://cdn3.iconfinder.com/data/icons/feather-5/24/globe-512.png",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Famous people",
    subtitle: "1 members",
    rightIcon: "https://cdn3.iconfinder.com/data/icons/feather-5/24/globe-512.png",
  },
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Gamers",
    subtitle: "3 members",
    rightIcon: "https://cdn3.iconfinder.com/data/icons/feather-5/24/globe-512.png",
  },
] as ListData[];

export const badges = [
  {
    iconUrl: "https://picsum.photos/200/300",
    name: "Globe Trotter",
    subtitle: "Has joined atleast 10 different groups",
    bottomLine: true,
  },
] as unknown as ListData[];
