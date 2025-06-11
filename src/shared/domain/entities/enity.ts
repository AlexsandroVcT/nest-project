import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<Props = any> {

  public readonly id: string;
  protected props: Props;

  constructor(props: Props, id?: string) {
    this.id = id ?? uuidv4();
    this.props = props;
  }

  getId(): string {
    return this.id;
  }

  getProps(): Props {
    return this.props;
  }

  setProps(props: Partial<Props>): void {
    this.props = { ...this.props, ...props };
  }
}
