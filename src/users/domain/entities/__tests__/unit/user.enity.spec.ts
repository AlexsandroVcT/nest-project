import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEnti unit tests', () => {
  let props: UserProps
  let sut: UserEntity
  beforeEach(() => {
    props = UserDataBuilder({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    })
    sut = new UserEntity(props)
  })

  it('Constructor method', () => {

    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.password).toBe(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
    });

    it('Getter of name field', () => {
      expect(sut.props.name).toBeDefined()
      expect(sut.props.name).toEqual(props.name)
      expect(typeof sut.props.name).toBe('string');
    })

    it('Getter of email field', () => {
      expect(sut.props.email).toBeDefined()
      expect(sut.props.email).toEqual(props.email)
      expect(typeof sut.props.email).toBe('string');
    })

    it('Getter of password field', () => {
      expect(sut.props.password).toBeDefined()
      expect(sut.props.password).toEqual(props.password)
      expect(typeof sut.props.password).toBe('string');
    })

    it('Getter of createdAt field', () => {
      expect(sut.props.createdAt).toBeDefined()
      expect(sut.props.createdAt).toBeInstanceOf(Date)
    })
  });
