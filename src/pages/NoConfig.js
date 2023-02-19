export default function NoConfig() {
  const styles = {
    image: {
      height: '50vh',
      margin: '0 auto',
      padding: 16
    },
    text: {
      textAlign: 'center',
      fontWeight: '800',
      padding: 8
    }
  };

  return (
    <div>
      <img style={styles.image} src="/images/church-logo.png" />
      <div style={styles.text}>
        <h2>The Dana Ranch Ward order of services is not currently available, please check back in a day or two!</h2>
      </div>
    </div>  );
}