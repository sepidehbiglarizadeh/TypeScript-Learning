// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {}

  removeEvent(): void {}
}
