import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', function () {

  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Hola mundo';
    input.simulate('change', {target: {value}})
    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('No debe postear la informacion on submit', () => {
    wrapper.find('form').simulate('submit', {preventDefault() {} })
    expect(setCategories).not.toHaveBeenCalled();
  })

  test('debe llamar al setCategories y limpiar la caja de texto', () => {
    const value = 'Lorem ipsum';
    // simular input change
    const input = wrapper.find('input');
    input.simulate('change', {target: {value}})
    // simular submit
    wrapper.find('form').simulate('submit', {preventDefault() {} })
    //  setCategories deberia llamarse
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // el value del input deberia estar vacio
    expect(input.prop('value')).toBe('');
  })
});
