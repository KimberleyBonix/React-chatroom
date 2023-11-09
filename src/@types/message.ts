export type TMessage = {
  id: string;
  author: string;
  content: string;
};

export type ChatState = {
  messages: TMessage[];
};
