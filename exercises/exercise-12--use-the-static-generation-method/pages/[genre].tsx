import type { GetStaticPaths, GetStaticProps } from "next"

type Props = {
  genre: string
}

const Genre = ({genre}: Props) => {
  return <p>{genre}</p>
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['rock', 'country', 'pop'].map((genre) => ({
      params: {genre}
    })), 
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const genre = context.params?.['genre'] as string
  if (!genre) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      genre
    },
    revalidate: 5
  }
}
export default Genre