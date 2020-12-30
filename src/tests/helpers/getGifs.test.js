import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fetch', function () {
  test('debe traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch')
    expect(gifs.length).toBe(10)
  })

  test('debe traer 0 elementos cuando no envio categoria', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
});
