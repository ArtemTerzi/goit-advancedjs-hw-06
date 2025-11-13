/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IComponent {
  title: string;
}

class Component {
  constructor(public props: IComponent) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
