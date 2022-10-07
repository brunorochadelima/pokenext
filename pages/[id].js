export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch("");
  const response = await data.json();

  return {
    props: { response },
  };
}

export async function getStaticPaths() {
  const data = await fetch("");
  const response = await data.json();

  const paths = response.map((item) => {
    return {
      paths: {
        id: `${item.id}`,
      },
    };
  });

  return { paths, fallback: false };
}
