import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en <GifGridItem />', function () {

  const title = 'Test title';
  const url = 'https://localhost/dummy.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url}/>);

  test('debe mostrar <GifGridItem/> coßrrectamente con sus valores por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title)
  })

  test('debe tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeIn')).toBe(true)
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  })
});
