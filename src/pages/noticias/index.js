import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import ReactPaginate from "react-paginate";
import Card from "../../components/card";

const NoticiasPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            subtitle
            slug
            author
            tag
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  height: 450
                  placeholder: BLURRED
                  layout: FIXED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
          id
          excerpt
        }
      }
    }
  `);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.allMdx.nodes.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.allMdx.nodes.slice(startIndex, endIndex);

  currentItems.forEach((element) => {
    console.log(element.frontmatter.slug);
  });

  const handlePageChange = ({ selected: page }) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <ReactPaginate
        containerClassName='flex justify-center items-center mb-4 sm:mb-8'
        activeClassName={"p-2 text-custom-font-primary"}
        pageClassName={"mx-2 text-4xl text-custom-font-primary"}
        nextLabel={">"}
        nextClassName={"font-bold text-3xl text-custom-font-primary"}
        previousLabel={"<"}
        previousClassName={"font-bold text-3xl text-custom-font-primary"}
        onPageChange={handlePageChange}
        pageCount={totalPages}
        forcePage={currentPage}
      />

      <h2 className='text-custom-font-primary text-center mb-8 text-5xl font-bold'>
        Últimas notícias
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center'>
        {currentItems.map((news) => (
          <Card news={news} />
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <title>Notícias</title>;

export default NoticiasPage;
