export type Action = (...args: any[]) => any;

export type Actions = {
  [key: string]: Action | null;
};

export type Listener = React.Dispatch<React.SetStateAction<any>>;
