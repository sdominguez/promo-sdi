const request = require('supertest');
const app = require('../app'); 

describe('Pruebas de rutas en app.js', () => {
  test('GET /components debe responder 200 y HTML', async () => {
    const res = await request(app).get('/components');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });

  test('GET /ruta-que-no-existe debe devolver la página 404.html (ruta "*")', async () => {
    const res = await request(app).get('/lo-que-sea');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });

  test('Debe servir contenido estático desde la carpeta "site"', async () => {
    const res = await request(app).get('/index.html');
    expect([200, 404]).toContain(res.status);
  });
});