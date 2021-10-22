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
        <div className="my-3">
            <GatsbyImage image={image} alt={`${title} Banner`} />
            {link && (
                <a href={link} title="this is a link">
                    A Link
                </a>
            )}
        </div>
    );
};

export default HeroBanner;
