import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import "./noticias.css";
import Noticia from "../../components/noticia";

const News = ({ data, children }) => {
  return (
    <Layout>
      <div className='flex justify-center'>
        <Noticia data={data} children={children} />
      </div>
      <Link
        to='/noticias'
        className='text-white rounded bg-custom-secondary py-1 px-2 text-lg mb-2 inline-block mt-16'
      >
        &#8678; Voltar
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        date(formatString: "DD/MM/YYYY")
        author
        tag
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export default News;
