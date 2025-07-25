
export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}


export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get password() {
    return this.props.password;
  }
  get email() {
    return this.props.email;
  }
  get createdAt() {
    return this.props.createdAt;
  }
}
