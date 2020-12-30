import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', function () {

  const category = 'Lorem ipsum'

  test('debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })

  test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url:'http://www.google.com',
      title: 'Cualquier cosa'
    },
      {
        id: '123',
        url:'http://www.yahoo.com',
        title: 'Cualquier otra cosa'
      }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
});


