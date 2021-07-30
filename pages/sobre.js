import withAuth from 'src/components/withAuth';

const Sobre = () => (
  <div>
    <p>Texto sobre aqui</p>
  </div>
);

export default withAuth(Sobre);
