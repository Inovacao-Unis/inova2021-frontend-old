import withAuth from 'src/components/withAuth';

const Home = () => (
  <div>
    <p>Texto sobre aqui</p>
  </div>
);

export default withAuth(Home);
