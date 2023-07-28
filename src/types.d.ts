interface ThemeMode {
  label: string;
  value: 'light' | 'dark' | 'system';
  icon: string;
}

interface Label {
  title: string;
  color: string;
}

interface DueDate {
  status: string;
  date: string;
}

interface Activity {
  content: string;
  author: string;
  createAt: string;
}

interface Attachment {
  name: string;
  thumbnail: string;
  url: string;
  createAt: string;
  createBy: string;
}

interface BoardData {
  _id: string;
  title: string;
  visible: 'private' | 'public' | 'workspace';
  ownerIds: Array<string>;
  memberIds: Array<string>;
}

interface BoardContent {
  listOrderIds: Array<string>;
  listData: Array<List>;
}

interface List {
  _id: string;
  title: string;
  boardId: string;
  cardOrderIds: Array<string>;
  cards: Array<Card>;
}

interface Card {
  _id: string;
  listId: string;
  boardId: string;
  labels: Array<Label>;
  memberIds: Array<string>;
  coverImage: string;
  title: string;
  descriptions?: string;
  activities: Array<Activity>;
  attachments: Array<Attachment>;
}

type Board = BoardData & BoardContent;
