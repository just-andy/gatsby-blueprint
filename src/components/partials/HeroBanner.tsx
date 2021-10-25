import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type Props = {
    title: string;
    filename: string;
    link?: string;
};

export const bannerQuery = graphql`
    query HeroBanners {
        allFile(filter: { relativeDirectory: { eq: "banners" } }) {
            edges {
                node {
                    name
                    childImageSharp {
                        gatsbyImageData(width: 1920)
                    }
                }
            }
        }
    }
`;

// Get Image Path
const getImagePath = (edges: string[], imageName: string) => {
    const imagePath = edges.find((edge) => edge.node.name === imageName);
    return imagePath.node;
};

const HeroBanner = ({ title, filename, link }: Props) => {
    const response = useStaticQuery(bannerQuery);
    const banners = response.allFile.edges;
    const image = getImage(getImagePath(banners, filename));

    // Return
    return (
        <div className="grid">
            <GatsbyImage className="row-start-1 col-end-2" image={image} alt={`${title} Banner`} />

            <div className="row-span-1 col-span-1 grid relative bg-primary-50">
                {/* Any content here will be centered in the component */}
                <h1>Hero text</h1>
            </div>
        </div>
    );
};

export default HeroBanner;
