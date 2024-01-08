import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
  disableRequestLogging: true,
});

fastify.get('/', async (_request, reply) => {
  const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  await res1.json();

  const res2 = await fetch('https://covid-api.com/api/reports/total');
  await res2.json();

  const res3 = await fetch('https://ipinfo.io/json');
  await res3.json();
});

const port = process.env.PORT || 3000;

fastify.listen({ port }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`Fastify is listening on port: ${address}`);
});
