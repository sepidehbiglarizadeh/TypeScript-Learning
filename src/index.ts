type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIwidget = Draggable & Resizable;

let textBox: UIwidget = {
  drag: () => {},
  resize: () => {},
};
